import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule, Store, Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Subject, of, ReplaySubject, throwError } from 'rxjs';
import { CarEffects } from './cars.effects';
import { CarService } from './car.service';
import { AppState } from '../shared/reducers';
import * as carsActions from './cars.actions';
import * as mockCarData from '../../tests-utils/mock-cars';

describe('CarEffects', () => {
    let effects: CarEffects;
    let service: Partial<CarService>;
    let store: Store<AppState>;
    let actions$: ReplaySubject<Action>;
    let appState: Subject<AppState>;

    beforeEach(() => {
        appState = new Subject<AppState>();
        service = { getCars(): any {}} as Partial<CarService>;
        actions$ = new ReplaySubject(1);
        TestBed.configureTestingModule({
            providers: [
                CarEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState: { bookState: {}, carState: {}}}),
                { provide: CarService, useFactory: () => service }
            ],
        });
        effects = TestBed.get<CarEffects>(CarEffects);
    });

    it('should create', () => {
        expect(effects).toBeTruthy();
    });

    describe('GET_CARS action', () => {
        let getCarsServiceCall;
        beforeEach(() => {
            getCarsServiceCall = spyOn(service, 'getCars');
        });

        describe('When GetCars action is dispatched', () => {
            beforeEach(() => {
                getCarsServiceCall.and.returnValue(of([]));
                effects.getCarsEffects$.subscribe();
                actions$.next(new carsActions.GetCars());
            });
            it('Check service is getting called', () => {
                expect(getCarsServiceCall).toHaveBeenCalledTimes(1);
            });
        });

        describe('When GetCars action is dispatched with success response', () => {
            const expectedPayload = mockCarData.mockCars;
            beforeEach(() => {
                getCarsServiceCall.and.returnValue(of(mockCarData.mockCars));
                actions$.next(new carsActions.GetCars());
            });
            it('dispatch GetCarsSuccess action on success', (done) => {
                effects.getCarsEffects$.subscribe((resultAction) => {
                    const expectedAction = new carsActions.GetCarsSuccess(expectedPayload);
                    expect(resultAction).toEqual(expectedAction);
                    done();
                });
            });
        });

        describe('When GetCars action is dispatched with failed response', () => {
            const mockError = { message: 'Error'};
            beforeEach(() => {
                getCarsServiceCall.and.returnValue(throwError(mockError));
                actions$.next(new carsActions.GetCars());
            });
            it('dispatch GetCarsError action on fail', (done) => {
                effects.getCarsEffects$.subscribe((resultAction) => {
                    const expectedAction = new carsActions.GetCarsError(mockError);
                    expect(resultAction).toEqual(expectedAction);
                    done();
                });
            });
        });
    });
});

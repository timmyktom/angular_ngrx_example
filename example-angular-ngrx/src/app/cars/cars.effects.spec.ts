import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule, Store, Action } from '@ngrx/store';
import { provideMockStore, MockStore  } from '@ngrx/store/testing';
import { Subject, of, ReplaySubject, throwError } from 'rxjs';
import { CarEffects } from './cars.effects';
import { CarService } from './car.service';
import { AppState } from '../shared/reducers';
import * as carsActions from './cars.actions';
import * as sharedActions from '../shared/actions';
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
        store = TestBed.get(Store);
    });

    it('should create', () => {
        expect(effects).toBeTruthy();
    });

    describe('GET_CARS action', () => {
        let dispatchStoreCall;
        let getCarsServiceCall;
        beforeEach(() => {
            getCarsServiceCall = spyOn(service, 'getCars');
            dispatchStoreCall = spyOn(store, 'dispatch');
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
            it('should dispatch ShowLoader action ', () => {
                expect(dispatchStoreCall).toHaveBeenCalledWith(new sharedActions.ShowLoader());
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
            it('should dispatch HideLoader action ', () => {
                effects.getCarsEffects$.subscribe();
                expect(dispatchStoreCall).toHaveBeenCalledWith(new sharedActions.HideLoader());
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
            it('should dispatch HideLoader action ', () => {
                effects.getCarsEffects$.subscribe();
                expect(dispatchStoreCall).toHaveBeenCalledWith(new sharedActions.HideLoader());
            });
        });
    });
});

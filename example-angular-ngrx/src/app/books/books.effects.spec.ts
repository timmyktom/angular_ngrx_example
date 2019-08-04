import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule, Store, Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Subject, of, ReplaySubject, throwError } from 'rxjs';
import { BookEffects } from './books.effects';
import { BookService } from './book.service';
import { AppState } from '../shared/reducers';
import * as booksActions from './books.actions';
import * as mockBookData from '../../tests-utils/mock-books';

describe('BookEffects', () => {
    let effects: BookEffects;
    let service: Partial<BookService>;
    let store: Store<AppState>;
    let actions$: ReplaySubject<Action>;
    let appState: Subject<AppState>;

    beforeEach(() => {
        appState = new Subject<AppState>();
        service = { getBooks(): any {}} as Partial<BookService>;
        actions$ = new ReplaySubject(1);
        TestBed.configureTestingModule({
            providers: [
                BookEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState: { bookState: {}, carState: {}}}),
                { provide: BookService, useFactory: () => service }
            ],
        });
        effects = TestBed.get<BookEffects>(BookEffects);
    });

    it('should create', () => {
        expect(effects).toBeTruthy();
    });

    describe('GET_BOOKS action', () => {
        let getBooksServiceCall;
        beforeEach(() => {
            getBooksServiceCall = spyOn(service, 'getBooks');
        });

        describe('When GetBooks action is dispatched', () => {
            beforeEach(() => {
                getBooksServiceCall.and.returnValue(of([]));
                effects.getBooksEffects$.subscribe();
                actions$.next(new booksActions.GetBooks());
            });
            it('Check service is getting called', () => {
                expect(getBooksServiceCall).toHaveBeenCalledTimes(1);
            });
        });

        describe('When GetBooks action is dispatched with success response', () => {
            const expectedPayload = mockBookData.mockBooks;
            beforeEach(() => {
                getBooksServiceCall.and.returnValue(of(mockBookData.mockBooks));
                actions$.next(new booksActions.GetBooks());
            });
            it('dispatch GetBooksSuccess action on success', (done) => {
                effects.getBooksEffects$.subscribe((resultAction) => {
                    const expectedAction = new booksActions.GetBooksSuccess(expectedPayload);
                    expect(resultAction).toEqual(expectedAction);
                    done();
                });
            });
        });

        describe('When GetBooks action is dispatched with failed response', () => {
            const mockError = { message: 'Error'};
            beforeEach(() => {
                getBooksServiceCall.and.returnValue(throwError(mockError));
                actions$.next(new booksActions.GetBooks());
            });
            it('dispatch GetBooksError action on fail', (done) => {
                effects.getBooksEffects$.subscribe((resultAction) => {
                    const expectedAction = new booksActions.GetBooksError(mockError);
                    expect(resultAction).toEqual(expectedAction);
                    done();
                });
            });
        });
    });
});

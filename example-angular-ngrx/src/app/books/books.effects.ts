import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AppState } from '../shared/reducers';
import { BookService } from './book.service';
import * as actions from './books.actions';
import * as sharedActions from '../shared/actions';

@Injectable()
export class BookEffects {
    getBooksEffects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.GET_BOOKS),
            switchMap(() => {
                this.store.dispatch(new sharedActions.ShowLoader());
                return this.bookService.getBooks()
                .pipe(
                    map(bookList => {
                        this.store.dispatch(new sharedActions.HideLoader());
                        return new actions.GetBooksSuccess(bookList);
                    }),
                    catchError((error) => {
                        this.store.dispatch(new sharedActions.HideLoader());
                        return of(new actions.GetBooksError(error));
                    })
                );
            })
        )
    );

    constructor(
        private store: Store<AppState>,
        private actions$: Actions,
        private bookService: BookService
    ) { }
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { BookService } from './book.service';
import * as actions from './books.actions';

@Injectable()
export class BookEffects {
    getBooksEffects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.GET_BOOKS),
            switchMap(() => this.bookService.getBooks()
                .pipe(
                    map(bookList => new actions.GetBooksSuccess(bookList)),
                    catchError((error) => {
                        return of(new actions.GetBooksError(error));
                    })
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private bookService: BookService
    ) { }
}

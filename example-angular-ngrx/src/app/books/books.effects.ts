import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { BookService } from './book.service';
import * as actions from './books.actions';

@Injectable()
export class BookEffects {
     @Effect() getBooksEffects$ = this.actions$
        .ofType(actions.GET_BOOKS)
        .switchMap(() => this.bookService.getBooks()
            .map(bookList => new actions.GetBooksSuccess(bookList))
            .catch((error) => {
                return Observable.of(new actions.GetBooksError(error));
            })
        );

    constructor(
        private actions$: Actions,
        private bookService: BookService
    ) { }
}

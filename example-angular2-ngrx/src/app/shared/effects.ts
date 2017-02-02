import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { BookService } from '../books/book.service';
import { CarService } from '../cars/car.service';
import * as actions from '../shared/actions';

@Injectable()
export class AppEffects {
     @Effect() getBooksEffects$ = this.actions$
        .ofType(actions.GET_BOOKS)
        .switchMap(() => this.bookService.getBooks())
        .map(bookList => actions.getBooksSuccess(bookList));

    @Effect() getCars$ = this.actions$
        .ofType(actions.GET_CARS)
        .switchMap(() => this.carService.getCars())
        .map(carList => actions.getCarsSuccess(carList));

    constructor(
        private actions$: Actions,
        private bookService: BookService,
        private carService: CarService,
    ) { }
}

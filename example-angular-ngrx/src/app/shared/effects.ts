import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { BookService } from '../books/book.service';
import { CarService } from '../cars/car.service';
import * as actions from '../shared/actions';

@Injectable()
export class AppEffects {
     @Effect() getBooksEffects$ = this.actions$
        .ofType(actions.GET_BOOKS)
        .switchMap(() => this.bookService.getBooks()
            .map(bookList => new actions.GetBooksSuccess(bookList))
            .catch((error) => {
                return Observable.of(new actions.GetBooksError(error));
            })
        );

    @Effect() getCars$ = this.actions$
        .ofType(actions.GET_CARS)
        .switchMap(() => this.carService.getCars()
            .map(carList => new actions.GetCarsSuccess(carList))
            .catch((error) => {
                return Observable.of(new actions.GetCarsError(error));
            })
        );


    constructor(
        private actions$: Actions,
        private bookService: BookService,
        private carService: CarService,
    ) { }
}

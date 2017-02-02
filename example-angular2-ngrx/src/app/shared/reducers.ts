import '@ngrx/core/add/operator/select';
import { combineReducers } from '@ngrx/store';
import * as fromBooks from '../books/books.reducers';
import * as fromCars from '../cars/cars.reducers';

export interface AppState {
    bookState: fromBooks.BookState;
    carState: fromCars.CarState;
}

const reducers = {
    bookState: fromBooks.BooksReducer,
    carState: fromCars.CarsReducer
};

const combined = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combined(state, action);
}

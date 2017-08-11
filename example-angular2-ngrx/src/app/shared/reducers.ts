import * as fromBooks from '../books/books.reducers';
import * as fromCars from '../cars/cars.reducers';

export interface AppState {
    bookState: fromBooks.BookState;
    carState: fromCars.CarState;
}

export const reducers = {
    bookState: fromBooks.BooksReducer,
    carState: fromCars.CarsReducer
};


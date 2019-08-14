import * as fromBooks from '../books/books.reducers';
import * as fromCars from '../cars/cars.reducers';
import * as fromLoader from './loader/loader.reducers';

export interface AppState {
    bookState: fromBooks.BookState;
    carState: fromCars.CarState;
    loaderState: fromLoader.LoaderState;
}

export const reducers = {
    bookState: fromBooks.BooksReducer,
    carState: fromCars.CarsReducer,
    loaderState: fromLoader.LoaderReducer
};

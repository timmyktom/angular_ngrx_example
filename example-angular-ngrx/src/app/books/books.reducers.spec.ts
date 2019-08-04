import * as fromBooksReducers from './books.reducers';
import * as fromBooksActions from './books.actions';
import { Book } from './book.model';
import * as mockBookData from '../../tests-utils/mock-books';

describe('BooksReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialBookState } = fromBooksReducers;
      const state = fromBooksReducers.BooksReducer(undefined, {} as any);
      expect(state).toBe(initialBookState);
    });
  });

  describe('GET_BOOKS action', () => {
    it('should set loaded to false and bookList to empty', () => {
        const { initialBookState } = fromBooksReducers;
        const action = new fromBooksActions.GetBooks();
        const state = fromBooksReducers.BooksReducer(initialBookState, action);

        expect(state.isBookListLoaded).toEqual(false);
        expect(state.isError).toEqual(false);
        expect(state.bookList).toEqual([]);
    });
  });

  describe('GET_BOOKS_SUCCESS action', () => {
    it('should set loaded to true, error to false and bookList', () => {
        const { initialBookState } = fromBooksReducers;
        const action = new fromBooksActions.GetBooksSuccess(mockBookData.mockBooks);
        const state = fromBooksReducers.BooksReducer(initialBookState, action);

        expect(state.isBookListLoaded).toEqual(true);
        expect(state.isError).toEqual(false);
        expect(state.bookList).toEqual(mockBookData.mockBooks);
    });
  });

  describe('GET_BOOKS_ERROR action', () => {
    it('should set loaded to false and Error to true', () => {
        const { initialBookState } = fromBooksReducers;
        const action = new fromBooksActions.GetBooksError(new Error());
        const state = fromBooksReducers.BooksReducer(initialBookState, action);

        expect(state.isBookListLoaded).toEqual(false);
        expect(state.isError).toEqual(true);
    });
  });

  describe('GET_BOOK_DETAILS action', () => {
    it('should set loaded to true, error to false and bookList', () => {
        const { initialBookState } = fromBooksReducers;
        const previousState = { ...initialBookState, isBookListLoaded: true, bookList: mockBookData.mockBooks};
        const action = new fromBooksActions.GetBookDetails(mockBookData.mockBooks[0].id);
        const state = fromBooksReducers.BooksReducer(previousState, action);

        expect(state.isBookListLoaded).toEqual(true);
        expect(state.isError).toEqual(false);
        expect(state.bookList).toEqual(mockBookData.mockBooks);
        expect(state.selectedBook).toEqual(mockBookData.mockBooks[0]);
    });
  });
});

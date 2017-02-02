import * as BooksReducers from './books.reducers';
import * as BooksActions from './books.actions';

import { defaultBook } from './book.model';

import { mockBooks } from '../testing/mockdata';

let state: BooksReducers.BookState;

describe('The Books reducer', () => {

    beforeEach(() => {
        state = {
            bookList: [],
            selectedBook: defaultBook
        };
    });


    fit('should return current state when no valid actions have been made', () => {
        const actual = BooksReducers.BooksReducer(state, {type: 'INVALID_ACTION', payload: {}});
        const expected = state;
        expect(actual).toBe(expected);
    });

    fit('should set bookList to empty array and selectedBook to default when ' +
            'BooksActions.GET_BOOKS is called', () => {
        const actual = BooksReducers.BooksReducer(state,
                        {type: BooksActions.GET_BOOKS});
        expect(actual.bookList.length).toBe(0);
        expect(actual.selectedBook.id).toBe(defaultBook.id);
        expect(actual.selectedBook.name).toBe(defaultBook.name);
    });

    fit('should set bookList when ' +
            'BooksActions.GET_BOOKS_SUCCESS is called', () => {
        const actual = BooksReducers.BooksReducer(state,
                        {type: BooksActions.GET_BOOKS_SUCCESS,
                         payload: mockBooks });
        expect(actual.bookList).toBe(mockBooks);
    });


    fit('should set the selectedBook when ' +
            'BooksActions.GET_BOOK_DETAILS is called with bookId', () => {
        state.bookList = mockBooks;
        const actual = BooksReducers.BooksReducer(state,
                        {type: BooksActions.GET_BOOK_DETAILS,
                        payload: mockBooks[0].id});
        expect(actual.selectedBook.id).toBe(mockBooks[0].id);
        expect(actual.selectedBook.name).toBe(mockBooks[0].name);
        expect(actual.selectedBook.price).toBe(mockBooks[0].price);
    });
});

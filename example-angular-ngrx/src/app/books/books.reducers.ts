import { ActionReducer, Action } from '@ngrx/store';

import * as BooksActions from './books.actions';
import { Book, defaultBook } from './book.model';

export interface BookState {
    bookList: Book[];
    isBookListLoaded: boolean;
    isError: boolean;
    selectedBook: Book;
}

export const initialBookState: BookState = {
    bookList: [],
    isBookListLoaded: false,
    isError: false,
    selectedBook: defaultBook
};

export function BooksReducer(state = initialBookState, action: BooksActions.BooksActions): BookState {
    let newState: BookState;
    switch (action.type) {
        case BooksActions.GET_BOOKS:
            newState = {...state,
                bookList: [],
                isBookListLoaded: false,
                isError: false
            };
            return newState;
        case BooksActions.GET_BOOKS_SUCCESS:
            newState = {...state,
                bookList: action.payload,
                isBookListLoaded: true,
                isError: false
            };
            return newState;
        case BooksActions.GET_BOOKS_ERROR:
            newState = {...state,
                isBookListLoaded: false,
                isError: true
            };
            return newState;
        case BooksActions.GET_BOOK_DETAILS:
            newState = {...state,
                selectedBook:  getBookDetails(state.bookList, action.payload)
            };
            return newState;
        default:
            return state;
    }
}

function getBookDetails(bookList: Book[], bookId: number) {
    return bookList.find(book =>
        book.id === bookId);
}

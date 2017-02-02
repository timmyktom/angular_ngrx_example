import { ActionReducer, Action } from '@ngrx/store';

import * as BooksActions from './books.actions';
import { Book, defaultBook } from './book.model';

export interface BookState {
    bookList: Book[];
    selectedBook: Book;
};

let bookState: BookState = {
    bookList: [],
    selectedBook: defaultBook
};

export const BooksReducer: ActionReducer<BookState> = (state = bookState, action: Action) => {
    let newState;
    switch (action.type) {
        case BooksActions.GET_BOOKS:
            newState = Object.assign({}, state);
            newState.bookList = [];
            newState.selectedBook = Object.assign({}, defaultBook);
            return newState;
        case BooksActions.GET_BOOKS_SUCCESS:
            newState = Object.assign({}, state);
            newState.bookList = action.payload;
            return newState;
        case BooksActions.GET_BOOK_DETAILS:
            newState = Object.assign({}, state);
            newState.selectedBook = getBookDetails(state.bookList, action.payload);
            return newState;
        default:
            return state;
    }
};

function getBookDetails (bookList: Book[], bookId: number) {
    return bookList.find(book =>
        book.id === bookId);
}

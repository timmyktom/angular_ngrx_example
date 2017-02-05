import { ActionReducer, Action } from '@ngrx/store';

import * as BooksActions from './books.actions';
import { Book, defaultBook } from './book.model';

export interface BookState {
    bookList: Book[];
    isBookListLoaded: boolean;
    selectedBook: Book;
};

const initialBookState: BookState = {
    bookList: [],
    isBookListLoaded: false,
    selectedBook: defaultBook
};

export const BooksReducer: ActionReducer<BookState> = (state = initialBookState, action: Action) => {
    let newState;
    switch (action.type) {
        case BooksActions.GET_BOOKS:
            newState = Object.assign({}, state);
            newState.bookList = [];
            newState.selectedBook = Object.assign({}, defaultBook);
            newState.isBookListLoaded = false;
            return newState;
        case BooksActions.GET_BOOKS_SUCCESS:
            newState = Object.assign({}, state);
            newState.bookList = action.payload;
            newState.isBookListLoaded = true;
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

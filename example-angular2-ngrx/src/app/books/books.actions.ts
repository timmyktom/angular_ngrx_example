import { Action } from '@ngrx/store';

import { Book } from './book.model';

export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';

export const GET_BOOK_DETAILS = 'GET_BOOK_DETAILS';

export function getBooks(): Action {
    return {
        type: GET_BOOKS
    };
}

export function getBooksSuccess(booksList: Book[]): Action {
    return {
        type: GET_BOOKS_SUCCESS,
        payload: booksList
    };
}

export function getBookDetails(bookId: number): Action {
    return {
        type: GET_BOOK_DETAILS,
        payload: bookId
    };
}

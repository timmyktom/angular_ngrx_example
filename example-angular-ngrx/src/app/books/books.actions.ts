import { Action } from '@ngrx/store';

import { Book } from './book.model';

export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';

export const GET_BOOK_DETAILS = 'GET_BOOK_DETAILS';

export class GetBooks implements Action {
    readonly type = GET_BOOKS;
}

export class GetBooksSuccess implements Action {
    readonly type = GET_BOOKS_SUCCESS;
    constructor(public payload: Book[]) { }
}

export class GetBooksError implements Action {
    readonly type = GET_BOOKS_ERROR;
    constructor(public payload: any) { }
}

export class GetBookDetails implements Action {
    readonly type = GET_BOOK_DETAILS;
    constructor(public payload: number) { }
}

export type BooksActions = GetBooks | GetBooksSuccess | GetBooksError | GetBookDetails;

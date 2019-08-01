import { GET_BOOKS, GetBooks,
    GET_BOOKS_SUCCESS, GetBooksSuccess,
    GET_BOOKS_ERROR, GetBooksError,
    GET_BOOK_DETAILS, GetBookDetails} from './books.actions';
import * as mockBookData from '../../tests-utils/mock-books';

describe('GetBooks', () => {
    it('should create an action', () => {
        const action = new GetBooks();
        expect(action.type).toEqual(GET_BOOKS);
    });
});

describe('GetBooksSuccess', () => {
    it('should create an action', () => {
        const action = new GetBooksSuccess(mockBookData.mockBooks);
        expect(action.type).toEqual(GET_BOOKS_SUCCESS);
        expect(action.payload).toEqual(mockBookData.mockBooks);
    });
});

describe('GetBooksError', () => {
    it('should create an action', () => {
        const error = new Error();
        const action = new GetBooksError(error);
        expect(action.type).toEqual(GET_BOOKS_ERROR);
        expect(action.payload).toEqual(error);
    });
});

describe('GetBookDetails', () => {
    it('should create an action', () => {
        const id = mockBookData.mockBooks[0].id;
        const action = new GetBookDetails(id);
        expect(action.type).toEqual(GET_BOOK_DETAILS);
        expect(action.payload).toEqual(id);
    });
});

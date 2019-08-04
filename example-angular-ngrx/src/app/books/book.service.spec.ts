import { async, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Book } from './book.model';
import { BookService } from './book.service';
import * as mockBookData from '../../tests-utils/mock-books';

const sampleBookResponse  = mockBookData.mockBooks;

class MockHttpClient {
    get(url: string) {
        if (url === 'assets/data/books.json') {
            const response = [...sampleBookResponse ];
            return of(response);
        }
        return of(false);
    }
}

describe('BookService', () => {
    let service: BookService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BookService,
                {provide: HttpClient, useClass: MockHttpClient }
            ]
        }).compileComponents();
        service = TestBed.get(BookService);
    }));

    describe('getBooks', () => {
        it('get all Books', (done) => {
            const observable = service.getBooks();
            observable.subscribe((result) => {
                expect(result).toEqual(sampleBookResponse);
                done();
            });
        });
    });
});

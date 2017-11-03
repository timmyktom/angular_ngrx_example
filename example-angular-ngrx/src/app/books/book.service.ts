import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Book } from './book.model';

@Injectable()
export class BookService {
    constructor(private http: HttpClient) {}

    getBooks(): Observable<Book[]> {
        const booksServiceUrl = 'assets/data/books.json';
        return this.http.get<Book[]>(booksServiceUrl);
    }
}

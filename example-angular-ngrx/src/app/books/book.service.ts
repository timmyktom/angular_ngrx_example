import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book.model';

@Injectable()
export class BookService {
    constructor(private http: HttpClient) {}

    getBooks() {
        const booksServiceUrl = 'assets/data/books.json';
        return this.http.get<Book[]>(booksServiceUrl);
    }
}

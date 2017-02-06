import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../shared/reducers';
import { Book } from './book.model';

// For dump component concept
// import { getBookDetails } from '../shared/actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[];
  bookDetails: Book;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(state => state.bookState).subscribe((bState) => {
      this.books = bState.bookList;
      this.bookDetails = bState.selectedBook;
    });
  }

  // For dump component concept
  // onBookSelected(event) {
  //     this.store.dispatch(getBookDetails(event.bookId));
  // }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../shared/reducers';
import { Book } from './book.model';

import { GetBookDetails } from './books.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  bookStoreSubscription: Subscription;
  books: Book[];
  bookDetails: Book;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.bookStoreSubscription =
      this.store.select(state => state.bookState).subscribe((bState) => {
        this.books = bState.bookList;
        this.bookDetails = bState.selectedBook;
      });
  }

  ngOnDestroy() {
    if (this.bookStoreSubscription) {
      this.bookStoreSubscription.unsubscribe();
    }
  }

  onBookSelected(event) {
      this.store.dispatch(new GetBookDetails(event.bookId));
  }

}

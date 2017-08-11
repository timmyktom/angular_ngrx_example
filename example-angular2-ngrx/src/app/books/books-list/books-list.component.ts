import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../shared/reducers';
import { GetBookDetails } from '../../shared/actions';

import { Book } from '../book.model';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() booksList: Book[];

  @Output() onBookSelect = new EventEmitter();

  selectedBookId: number;

  // For dump component concept
  // constructor() { }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSelect() {
    if (this.selectedBookId) {
      this.store.dispatch(new GetBookDetails(this.selectedBookId));

       // For dump component concept
       // this.onBookSelect.emit({bookId: this.selectedBookId});
    }
  }
}

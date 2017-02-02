import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../shared/reducers';
import { getBookDetails } from '../../shared/actions';

import { Book } from '../book.model';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() booksList: Book[];

  selectedBookId: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSelect() {
    if (this.selectedBookId) {
       this.store.dispatch(getBookDetails(this.selectedBookId));
    }
  }
}

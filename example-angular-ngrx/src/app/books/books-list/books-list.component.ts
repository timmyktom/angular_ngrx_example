import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

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

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    if (this.selectedBookId) {
       this.onBookSelect.emit({bookId: this.selectedBookId});
    }
  }
}

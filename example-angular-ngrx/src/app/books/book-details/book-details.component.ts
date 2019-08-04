import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  data: Book;
  @Input('selectedBookDetails')
  set selectedBookDetails(val) {
    this.data = val;
  }

  constructor() { }

  ngOnInit() {
  }

}

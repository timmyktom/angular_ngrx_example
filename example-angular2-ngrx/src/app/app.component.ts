import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './shared/reducers';
import { getBooks, getCars } from './shared/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getBooks());
    this.store.dispatch(getCars());
  }
}

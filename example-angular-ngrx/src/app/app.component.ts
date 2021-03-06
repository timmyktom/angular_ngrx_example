import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './shared/reducers';
import { GetBooks, GetCars } from './shared/actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoader = false;
  constructor(private store: Store<AppState>) {}

    ngOnInit() {
      this.store.select(state => state.loaderState).subscribe((loaderState) => {
        this.showLoader = loaderState.loadingCount > 0;
      });
      this.store.dispatch(new GetBooks());
      this.store.dispatch(new GetCars());
    }
}

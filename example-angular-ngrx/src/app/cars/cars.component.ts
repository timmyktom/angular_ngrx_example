import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../shared/reducers';
import { Car } from './car.model';

import { GetCarDetails } from './cars.actions';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, OnDestroy {
  carStoreSubscription: Subscription;
  cars: Car[];
  carDetails: Car;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.carStoreSubscription =
      this.store.select(state => state.carState).subscribe((cState) => {
        this.cars = cState.carList;
        this.carDetails = cState.selectedCar;
      });
  }

  ngOnDestroy() {
    if (this.carStoreSubscription) {
      this.carStoreSubscription.unsubscribe();
    }
  }

  onCarSelected(event) {
    this.store.dispatch(new GetCarDetails(event.CarModel));
  }
}

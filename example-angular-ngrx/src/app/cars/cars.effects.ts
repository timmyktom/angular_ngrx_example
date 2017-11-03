import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { CarService } from '../cars/car.service';
import * as actions from './cars.actions';

@Injectable()
export class CarEffects {
    @Effect() getCars$ = this.actions$
    .ofType(actions.GET_CARS)
    .switchMap(() => this.carService.getCars()
        .map(carList => new actions.GetCarsSuccess(carList))
        .catch((error) => {
            return Observable.of(new actions.GetCarsError(error));
        })
    );

    constructor(
        private actions$: Actions,
        private carService: CarService
    ) { }
}

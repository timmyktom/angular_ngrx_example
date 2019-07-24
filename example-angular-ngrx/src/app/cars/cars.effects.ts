import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CarService } from '../cars/car.service';
import * as actions from './cars.actions';

@Injectable()
export class CarEffects {
    
    getCarsEffects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.GET_CARS),
            switchMap(() => this.carService.getCars()
                .pipe(
                    map(carList => new actions.GetCarsSuccess(carList)),
                    catchError((error) => {
                        return of(new actions.GetCarsError(error));
                    })
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private carService: CarService
    ) { }
}

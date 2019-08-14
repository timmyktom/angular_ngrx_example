import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AppState } from '../shared/reducers';
import { CarService } from '../cars/car.service';
import * as actions from './cars.actions';
import * as sharedActions from '../shared/actions';

@Injectable()
export class CarEffects {
    getCarsEffects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.GET_CARS),
            switchMap(() => {
                this.store.dispatch(new sharedActions.ShowLoader());
                return this.carService.getCars()
                .pipe(
                    map(carList => {
                        this.store.dispatch(new sharedActions.HideLoader());
                        return new actions.GetCarsSuccess(carList);
                    }),
                    catchError((error) => {
                        this.store.dispatch(new sharedActions.HideLoader());
                        return of(new actions.GetCarsError(error));
                    })
                );
            })
        )
    );

    constructor(
        private store: Store<AppState>,
        private actions$: Actions,
        private carService: CarService
    ) { }
}

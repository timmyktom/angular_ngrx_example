import { Action } from '@ngrx/store';
import { Car } from './car.model';

export const GET_CARS = 'GET_CARS';
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
export const GET_CARS_ERROR = 'GET_CARS_ERROR';
export const GET_CAR_DETAILS = 'GET_CAR_DETAILS';

export class GetCars implements Action {
    readonly type = GET_CARS;
}

export class GetCarsSuccess implements Action {
    readonly type = GET_CARS_SUCCESS;
    constructor(public payload: Car[]) { }
}

export class GetCarsError implements Action {
    readonly type = GET_CARS_ERROR;
    constructor(public payload: any) { }
}

export class GetCarDetails implements Action {
    readonly type = GET_CAR_DETAILS;
    constructor(public payload: string) { }
}

export type CarsActions = GetCars | GetCarsSuccess | GetCarsError | GetCarDetails;
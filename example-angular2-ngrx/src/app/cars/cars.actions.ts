import { Action } from '@ngrx/store';

import { Car } from './car.model';

export const GET_CARS = 'GET_CARS';
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';

export const GET_CAR_DETAILS = 'GET_CAR_DETAILS';

export function getCars(): Action {
    return {
        type: GET_CARS
    };
}

export function getCarsSuccess(carsList: Car[]): Action {
    return {
        type: GET_CARS_SUCCESS,
        payload: carsList
    };
}

export function getCarDetails(model: string): Action {
    return {
        type: GET_CAR_DETAILS,
        payload: model
    };
}

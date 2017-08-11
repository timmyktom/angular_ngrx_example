import { ActionReducer, Action } from '@ngrx/store';

import * as CarsActions from './cars.actions';
import { Car, defaultCar } from './car.model';

export interface CarState {
    carList: Car[];
    isCarListLoaded: boolean;
    selectedCar: Car;
};

const initialCarState: CarState = {
    carList: [],
    isCarListLoaded: false,
    selectedCar: defaultCar
};

export function CarsReducer(state = initialCarState, action: CarsActions.CarsActions): CarState {
    let newState: CarState;
    switch (action.type) {
        case CarsActions.GET_CARS_SUCCESS:
            newState = Object.assign({}, state);
            newState.carList = action.payload;
            newState.isCarListLoaded = true;
            return newState;
        case CarsActions.GET_CAR_DETAILS:
            newState = Object.assign({}, state);
            newState.selectedCar = getCarDetails(state.carList, action.payload);
            return newState;
        default:
            return state;
    }
};

function getCarDetails (carList: Car[], carModel: string) {
    return carList.find(car =>
        car.model === carModel);
}

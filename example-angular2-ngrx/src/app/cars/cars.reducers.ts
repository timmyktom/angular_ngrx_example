import { ActionReducer, Action } from '@ngrx/store';

import * as CarsActions from './cars.actions';
import { Car, defaultCar } from './car.model';

export interface CarState {
    carList: Car[];
    isCarListLoaded: boolean;
    selectedCar: Car;
};

let carState: CarState = {
    carList: [],
    isCarListLoaded: false,
    selectedCar: defaultCar
};

export const CarsReducer: ActionReducer<CarState> = (state = carState, action: Action) => {
    let newState;
    switch (action.type) {
        case CarsActions.GET_CARS:
            newState = Object.assign({}, state);
            newState.carList = [];
            newState.selectedCar = Object.assign({}, defaultCar);
            newState.isCarListLoaded = false;
            return newState;
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

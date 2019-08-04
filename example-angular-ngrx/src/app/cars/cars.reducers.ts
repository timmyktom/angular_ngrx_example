import { ActionReducer, Action } from '@ngrx/store';

import * as CarsActions from './cars.actions';
import { Car, defaultCar } from './car.model';

export interface CarState {
    carList: Car[];
    isCarListLoaded: boolean;
    isError: boolean;
    selectedCar: Car;
}

export const initialCarState: CarState = {
    carList: [],
    isCarListLoaded: false,
    isError: false,
    selectedCar: defaultCar
};

export function CarsReducer(state = initialCarState, action: CarsActions.CarsActions): CarState {
    let newState: CarState;
    switch (action.type) {
        case CarsActions.GET_CARS:
            newState = {...state,
                carList: [],
                isCarListLoaded: false,
                isError: false
            };
            return newState;
        case CarsActions.GET_CARS_SUCCESS:
            newState = {...state,
                carList: action.payload,
                isCarListLoaded: true,
                isError: false
            };
            return newState;
        case CarsActions.GET_CARS_ERROR:
            newState = {...state,
                isCarListLoaded: false,
                isError: true
            };
            return newState;
        case CarsActions.GET_CAR_DETAILS:
            newState = {...state,
                selectedCar:  getCarDetails(state.carList, action.payload)
            };
            return newState;
        default:
            return state;
    }
}

function getCarDetails(carList: Car[], carModel: string) {
    return carList.find(car =>
        car.model === carModel);
}

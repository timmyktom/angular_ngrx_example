import * as CarsReducers from './cars.reducers';
import * as CarsActions from './cars.actions';

import { defaultCar } from './car.model';

import { mockCars } from '../testing/mockdata';

let state: CarsReducers.CarState;

describe('The Cars reducer', () => {

    beforeEach(() => {
        state = {
            carList: [],
            selectedCar: defaultCar,
            isCarListLoaded: false
        };
    });

    fit('should set carList to empty array and selectedCar to default when ' +
            'CarsActions.GET_CARS is called', () => {
        const actual = CarsReducers.CarsReducer(state,
            new CarsActions.GetCars());
        expect(actual.carList.length).toBe(0);
        expect(actual.selectedCar.model).toBe(defaultCar.model);
        expect(actual.selectedCar.manufacturer).toBe(defaultCar.manufacturer);
    });

    fit('should set carList when ' +
            'CarsActions.GET_CARS_SUCCESS is called', () => {
        const actual = CarsReducers.CarsReducer(state,
            new CarsActions.GetCarsSuccess(mockCars));
        expect(actual.carList).toBe(mockCars);
    });


    fit('should set the selectedCar when ' +
            'CarsActions.GET_CAR_DETAILS is called with carModel', () => {
        state.carList = mockCars;
        const actual = CarsReducers.CarsReducer(state,
            new CarsActions.GetCarDetails(mockCars[0].model));
        expect(actual.selectedCar.model).toBe(mockCars[0].model);
        expect(actual.selectedCar.manufacturer).toBe(mockCars[0].manufacturer);
        expect(actual.selectedCar.price).toBe(mockCars[0].price);
    });
});

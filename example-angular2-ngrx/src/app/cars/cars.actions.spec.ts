import * as CarActions from './cars.actions';
import { mockCars } from '../testing/mockdata';

describe('The Cars actions', () => {

    fit('should return action with type:GET_CARS when getCars is called', () => {
        const actual = CarActions.getCars();
        expect(actual.type).toBe(CarActions.GET_CARS);
    });

    fit('should return action with type:GET_CARS_SUCCESS and payload:CarsList ' +
            ' when getCarsSuccess is called', () => {
        const actual = CarActions.getCarsSuccess(mockCars);
        expect(actual.type).toBe(CarActions.GET_CARS_SUCCESS);
        expect(actual.payload).toBe(mockCars);
    });

    fit('should return action with type:GET_CAR_DETAILS and payload: bookId ' +
           ' when getCarDetails is called', () => {
        const actual = CarActions.getCarDetails(mockCars[0].model);
        expect(actual.type).toBe(CarActions.GET_CAR_DETAILS);
        expect(actual.payload).toBe(mockCars[0].model);
    });
});

import { GET_CARS, GetCars,
        GET_CARS_SUCCESS, GetCarsSuccess,
        GET_CARS_ERROR, GetCarsError,
        GET_CAR_DETAILS, GetCarDetails} from './cars.actions';
import * as mockCarData from '../../tests-utils/mock-cars';

describe('GetCars', () => {
    it('should create an action', () => {
        const action = new GetCars();
        expect(action.type).toEqual(GET_CARS);
    });
});

describe('GetCarsSuccess', () => {
    it('should create an action', () => {
        const action = new GetCarsSuccess(mockCarData.mockCars);
        expect(action.type).toEqual(GET_CARS_SUCCESS);
        expect(action.payload).toEqual(mockCarData.mockCars);
    });
});

describe('GetCarsError', () => {
    it('should create an action', () => {
        const error = new Error();
        const action = new GetCarsError(error);
        expect(action.type).toEqual(GET_CARS_ERROR);
        expect(action.payload).toEqual(error);
    });
});

describe('GetCarDetails', () => {
    it('should create an action', () => {
        const carModel = mockCarData.mockCars[0].model;
        const action = new GetCarDetails(carModel);
        expect(action.type).toEqual(GET_CAR_DETAILS);
        expect(action.payload).toEqual(carModel);
    });
});

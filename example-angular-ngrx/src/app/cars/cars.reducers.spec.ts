import * as fromCarsReducers from './cars.reducers';
import * as fromCarsActions from './cars.actions';
import { Car } from './car.model';
import * as mockCarData from '../../tests-utils/mock-cars';

describe('CarsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialCarState } = fromCarsReducers;
      const state = fromCarsReducers.CarsReducer(undefined, {} as any);
      expect(state).toBe(initialCarState);
    });
  });

  describe('GET_CARS action', () => {
    it('should set loaded to false and carlist to empty', () => {
        const { initialCarState } = fromCarsReducers;
        const action = new fromCarsActions.GetCars();
        const state = fromCarsReducers.CarsReducer(initialCarState, action);

        expect(state.isCarListLoaded).toEqual(false);
        expect(state.isError).toEqual(false);
        expect(state.carList).toEqual([]);
    });
  });

  describe('GET_CARS_SUCCESS action', () => {
    it('should set loaded to true, error to false and carlist', () => {
        const { initialCarState } = fromCarsReducers;
        const action = new fromCarsActions.GetCarsSuccess(mockCarData.mockCars);
        const state = fromCarsReducers.CarsReducer(initialCarState, action);

        expect(state.isCarListLoaded).toEqual(true);
        expect(state.isError).toEqual(false);
        expect(state.carList).toEqual(mockCarData.mockCars);
    });
  });

  describe('GET_CARS_ERROR action', () => {
    it('should set loaded to false and Error to true', () => {
        const { initialCarState } = fromCarsReducers;
        const action = new fromCarsActions.GetCarsError(new Error());
        const state = fromCarsReducers.CarsReducer(initialCarState, action);

        expect(state.isCarListLoaded).toEqual(false);
        expect(state.isError).toEqual(true);
    });
  });

  describe('GET_CAR_DETAILS action', () => {
    it('should set loaded to true, error to false and carlist', () => {
        const { initialCarState } = fromCarsReducers;
        const previousState = { ...initialCarState, isCarListLoaded: true, carList: mockCarData.mockCars};
        const action = new fromCarsActions.GetCarDetails(mockCarData.mockCars[0].model);
        const state = fromCarsReducers.CarsReducer(previousState, action);

        expect(state.isCarListLoaded).toEqual(true);
        expect(state.isError).toEqual(false);
        expect(state.carList).toEqual(mockCarData.mockCars);
        expect(state.selectedCar).toEqual(mockCarData.mockCars[0]);
    });
  });
});

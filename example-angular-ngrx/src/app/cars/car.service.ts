import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './car.model';

@Injectable()
export class CarService {
    constructor(private http: HttpClient) {}

    getCars() {
        const carsServiceUrl = 'assets/data/cars.json';
        return this.http.get<Car[]>(carsServiceUrl);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Car } from './car.model';

@Injectable()
export class CarService {
    constructor(private http: HttpClient) {}

    getCars(): Observable<Car[]> {
        const carsServiceUrl = 'assets/data/cars.json';
        return this.http.get<Car[]>(carsServiceUrl);
    }
}

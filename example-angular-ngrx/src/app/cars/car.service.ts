import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Car } from './car.model';

@Injectable()
export class CarService {
    constructor(private http: Http) {}

    getCars(): Observable<Car[]> {
        const carsServiceUrl = 'assets/data/cars.json';
        const headers = new Headers();
        return this.http.get(carsServiceUrl, { headers: headers })
            .map((res: Response) => {
                return <Car[]>res.json();
            });
    }
}

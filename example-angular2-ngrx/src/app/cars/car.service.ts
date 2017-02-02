import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Car } from './car.model';

@Injectable()
export class CarService {
    constructor(private http: Http) {}

    getCars(): Observable<Car[]> {
        let carsServiceUrl = 'assets/data/cars.json';
        let headers = new Headers();
        return this.http.get(carsServiceUrl, { headers: headers })
            .map((res: Response) => {
                return <Car[]>res.json();
            });
    }
}

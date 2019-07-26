import { async, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Car } from './car.model';
import { CarService } from './car.service';
import * as mockCarData from '../../tests-utils/mock-cars';

const sampleCarResponse  = mockCarData.mockCars;

class MockHttpClient {
    get(url: string) {
        if (url === 'assets/data/cars.json') {
            const response = [...sampleCarResponse ];
            return of(response);
        }
        return of(false);
    }
}

describe('CarService', () => {
    let service: CarService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                CarService,
                {provide: HttpClient, useClass: MockHttpClient }
            ]
        }).compileComponents();
        service = TestBed.get(CarService);
    }));

    describe('getCars', () => {
        it('get all Cars', (done) => {
            const observable = service.getCars();
            observable.subscribe((result) => {
                expect(result).toEqual(sampleCarResponse);
                done();
            });
        });
    });
});

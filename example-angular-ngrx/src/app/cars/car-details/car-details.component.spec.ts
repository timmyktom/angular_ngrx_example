import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsComponent } from './car-details.component';
import * as mockCarData from '../../../tests-utils/mock-cars';

describe('CarDetailsComponent', () => {
  let component: CarDetailsComponent;
  let fixture: ComponentFixture<CarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailsComponent);
    component = fixture.componentInstance;
    component.selectedCarDetails = mockCarData.mockCars[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

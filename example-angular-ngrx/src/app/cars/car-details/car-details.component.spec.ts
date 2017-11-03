/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarDetailsComponent } from './car-details.component';
import { defaultCar } from '../car.model';
import { mockCars } from '../../testing/mockdata';

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
    component.selectedCarDetails = mockCars[0];
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display Car details component when car is selected', () => {
    const element = fixture.debugElement.query(By.css('.container'));
    expect(element).toBeDefined();
  });

  fit('should not display Car details component when no car is selected', () => {
    component.selectedCarDetails = defaultCar;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.container'));
    expect(element).toBeNull();
  });

});
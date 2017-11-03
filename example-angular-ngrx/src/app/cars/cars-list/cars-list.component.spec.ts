/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule, ActionReducer, State } from '@ngrx/store';

import { AppState, reducers } from '../../shared/reducers';

import { CarsListComponent } from './cars-list.component';
import { mockCars } from '../../testing/mockdata';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports :[FormsModule],
        declarations: [ CarsListComponent ],
        providers:     [
        { provide: Store,  useValue: store }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should not display list when carsList array is empty', () => {
    const element = fixture.debugElement.query(By.css('.table'));
    expect(element).toBeNull();
  });

  fit('should display list when carsList array contains data', () => {
    component.carsList = mockCars;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.table'));
    expect(element).toBeDefined();
  });
});
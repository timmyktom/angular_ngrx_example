/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule, State } from '@ngrx/store';

import { AppState, reducers } from '../shared/reducers';
import { CarsComponent } from './cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { defaultCar } from './car.model';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let store: Store<AppState>;

  let reduce = () => {
    return <any>{
      carState: {
          carList: [],
          selectedCar: defaultCar
      }
    } as AppState;
  };

  beforeEach(async(() => {
    let storeModuleImport = StoreModule.forRoot(reducers); // should include the mock reducer
    TestBed.configureTestingModule({
    imports: [
        FormsModule
        ],
      declarations: [ 
          CarsComponent,
          CarsListComponent,
          CarDetailsComponent
           ],
      providers:     [
        { provide: Store,  useValue: store },
        ...storeModuleImport.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});

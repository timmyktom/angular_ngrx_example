/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store, StoreModule, State } from '@ngrx/store';

import { AppState, reducer } from '../shared/reducers';
import { CarsComponent } from './cars.component';
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
    let storeModuleImport = StoreModule.provideStore(reduce); // should include the mock reducer
    TestBed.configureTestingModule({
      declarations: [ CarsComponent ],
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CarsListComponent } from './cars-list.component';
import * as mockCarData from '../../../tests-utils/mock-cars';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsListComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    component.carsList = mockCarData.mockCars;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event bookSelect when onSelect get called', () => {
    component.selectedCarModel = mockCarData.mockCars[0].model;
    let carEvent;
    component.carSelect.subscribe((value) => carEvent = value);
    component.onSelect();
    fixture.detectChanges();
    expect(carEvent.CarModel).toBe(component.selectedCarModel);
  });
});

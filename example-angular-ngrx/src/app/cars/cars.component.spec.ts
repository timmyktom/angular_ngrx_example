import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StoreModule, Store, Action } from '@ngrx/store';
import { AppState } from '../shared/reducers';
import { CarsComponent } from './cars.component';
import { CarState, initialCarState} from './cars.reducers';
import { Car } from './car.model';
import { GetCarDetails } from './cars.actions';
import { MockReducer } from '../testing';

@Component({
    selector: 'app-cars-list',
    template: '',
})
class MockCarsListComponent {
    @Input() carsList: Car[];
    @Output() carSelect = new EventEmitter<void>();
}

@Component({
    selector: 'app-car-details',
    template: '',
})
class MockCarDetailsComponent {
    @Input() selectedCarDetails: Car;
}

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;
  let store: Store<{}>;
  let carState: CarState;

  beforeEach(async(() => {
    carState = {...initialCarState };
    TestBed.configureTestingModule({
        providers: [
            provideMockStore({ initialState: { bookState: {}, carState: {}}})
        ],
        declarations: [ CarsComponent, MockCarsListComponent, MockCarDetailsComponent ],
        imports: [StoreModule.forRoot({
            carState: (state, action) => carState
        } as MockReducer<AppState>)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    store = fixture.componentRef.injector.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When onCarSelected is called ', () => {
    it('should dispatch action GetCarDetails', (done) => {
        const expectedAction = new GetCarDetails('123');
        spyOn(store, 'dispatch').and.callFake((actualAction: Action) => {
            expect(actualAction).toEqual(expectedAction);
            done();
        });
        component.onCarSelected({CarModel: '123'});
    });
  });

  describe('When ngOnDestroy is called ', () => {
    it('should unsubscribe', () => {
        spyOn(component.carStoreSubscription, 'unsubscribe');
        component.ngOnDestroy();
        expect(component.carStoreSubscription.unsubscribe).toHaveBeenCalledTimes(1);
    });
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect  } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';


import { defaultCar } from './cars/car.model';
import { defaultBook } from './books/book.model';
import { AppState } from './shared/reducers';

import { mockCars } from './testing/mockdata';

let reduce = () => {
 return <any>{
   bookState: {
        bookList: [],
        isBookListLoaded: false,
        selectedBook: defaultBook
    },
   carState: {
      carList: [],
      isCarListLoaded: false,
      selectedCar: defaultCar
    }
 } as AppState;
};
describe('App: ExampleAngular2Ngrx', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    let storeModuleImport = StoreModule.forRoot(reduce); // should include the mock reducer
    TestBed.configureTestingModule({
      imports: [
          FormsModule,
          RouterTestingModule
          ],
      declarations: [
          AppComponent,
          HomeComponent,
          BooksComponent,
          BooksListComponent,
          BookDetailsComponent,
          CarsComponent,
          CarsListComponent,
          CarDetailsComponent
          ],
        providers: [ 
            { provide: ComponentFixtureAutoDetect, useValue: true },
            ...storeModuleImport.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });

  fit('should create the app', () => {
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  });

});

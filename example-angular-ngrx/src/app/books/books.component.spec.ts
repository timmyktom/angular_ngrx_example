/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule, State } from '@ngrx/store';


import { AppState, reducers } from '../shared/reducers';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { defaultBook } from './book.model';

describe('BooksComponent', () => {
  let component: BooksComponent;                                 
  let fixture: ComponentFixture<BooksComponent>;
  let store: Store<AppState>;

  let reduce = () => {
    return <any>{
      bookState: {
          bookList: [],
          selectedBook: defaultBook,
          isBookListLoaded: false
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
          BooksComponent,
          BooksListComponent,
          BookDetailsComponent
      ],
      providers:     [
        { provide: Store,  useValue: store },
        ...storeModuleImport.providers]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule, ActionReducer, State } from '@ngrx/store';

import { AppState, reducer } from '../../shared/reducers';
import { BooksListComponent } from './books-list.component';

import { mockBooks } from '../../testing/mockdata';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[FormsModule],
      declarations: [ BooksListComponent ],
      providers:     [
      { provide: Store,  useValue: store }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should not display list when booksList array is empty', () => {
    const element = fixture.debugElement.query(By.css('.table'));
    expect(element).toBeNull();
  });

  fit('should display list when booksList array contains data', () => {
    component.booksList = mockBooks;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.table'));
    expect(element).toBeDefined();
  });
});

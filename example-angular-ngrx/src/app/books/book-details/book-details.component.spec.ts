/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookDetailsComponent } from './book-details.component';
import { defaultBook } from '../book.model';
import { mockBooks } from '../../testing/mockdata';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    component.selectedBookDetails = mockBooks[0];
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display book details component when book is selected', () => {
    const element = fixture.debugElement.query(By.css('.container'));
    expect(element).toBeDefined();
  });

  fit('should not display book details component when no book is selected', () => {
    component.selectedBookDetails = defaultBook;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.container'));
    expect(element).toBeNull();
  });
});
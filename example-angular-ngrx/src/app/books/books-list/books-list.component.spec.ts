import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BooksListComponent } from './books-list.component';
import * as mockBookData from '../../../tests-utils/mock-books';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksListComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    component.booksList = mockBookData.mockBooks;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event bookSelect when onSelect get called', () => {
    component.selectedBookId = mockBookData.mockBooks[0].id;
    let bookEvent;
    component.bookSelect.subscribe((value) => bookEvent = value);
    component.onSelect();
    fixture.detectChanges();
    expect(bookEvent.bookId).toBe(component.selectedBookId);
  });
});

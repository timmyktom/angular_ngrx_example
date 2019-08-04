import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StoreModule, Store, Action } from '@ngrx/store';
import { AppState } from '../shared/reducers';
import { BooksComponent } from './books.component';
import { BookState, initialBookState} from './books.reducers';
import { Book } from './book.model';
import { GetBookDetails } from './books.actions';
import { MockReducer } from '../testing';

@Component({
    selector: 'app-books-list',
    template: '',
})
class MockBooksListComponent {
    @Input() booksList: Book[];
    @Output() bookSelect = new EventEmitter<void>();
}

@Component({
    selector: 'app-book-details',
    template: '',
})
class MockBookDetailsComponent {
    @Input() selectedBookDetails: Book;
}

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let store: Store<{}>;
  let bookState: BookState;

  beforeEach(async(() => {
    bookState = {...initialBookState };
    TestBed.configureTestingModule({
        providers: [
            provideMockStore({ initialState: { bookState: {}, carState: {}}})
        ],
        declarations: [ BooksComponent, MockBooksListComponent, MockBookDetailsComponent ],
        imports: [StoreModule.forRoot({
            bookState: (state, action) => bookState
        } as MockReducer<AppState>)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    store = fixture.componentRef.injector.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When onBookSelected is called ', () => {
        it('should dispatch action GetBookDetails', (done) => {
            const expectedAction = new GetBookDetails(123);
            spyOn(store, 'dispatch').and.callFake((actualAction: Action) => {
                expect(actualAction).toEqual(expectedAction);
                done();
            });
            component.onBookSelected({bookId: 123});
        });
  });
});

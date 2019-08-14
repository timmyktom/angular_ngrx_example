import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule, Store, Action } from '@ngrx/store';
import { AppState } from './shared/reducers';
import { AppComponent } from './app.component';
import { GetBooks, GetCars } from './shared/actions';

@Component({
    selector: 'app-loader',
    template: '',
})
class MockLoaderComponent {}

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let store: Store<{}>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({ initialState: { bookState: {}, carState: {}, loaderState: { loadingCount: 0}}})
            ],
            declarations: [
                AppComponent, MockLoaderComponent
            ],
            imports: [ RouterTestingModule]
            })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        store = fixture.componentRef.injector.get(Store);
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    describe('ngOnInit', () => {
        it('should dispatch GetBooks action ', () => {
          const actionBooks = new GetBooks();
          const spyActionBooks = spyOn(store, 'dispatch');
          component.ngOnInit();
          expect(spyActionBooks).toHaveBeenCalledWith(actionBooks);
        });

        it('should dispatch GetCars action ', () => {
          const actionCars = new GetCars();
          const spyActionCars = spyOn(store, 'dispatch');
          component.ngOnInit();
          expect(spyActionCars).toHaveBeenCalledWith(actionCars);
        });
      });
});

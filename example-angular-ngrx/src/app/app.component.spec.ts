import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule, Store, Action } from '@ngrx/store';
import { AppState } from './shared/reducers';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let store: Store<{}>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({ initialState: { bookState: {}, carState: {}}})
            ],
            declarations: [
                AppComponent
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
});

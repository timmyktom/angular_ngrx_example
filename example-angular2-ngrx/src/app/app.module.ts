import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import 'rxjs/Rx';

import { HomeModule } from './home/home.module';
import { BooksModule } from './books/books.module';
import { CarsModule } from './cars/cars.module';
import { AppRoutingModule } from './app.routing.module';

import { reducer } from './shared/reducers';
import { AppEffects } from './shared/effects';
import { BookService } from './books/book.service';
import { CarService } from './cars/car.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    AppRoutingModule, HomeModule, BooksModule, CarsModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(AppEffects)
  ],
  providers: [BookService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

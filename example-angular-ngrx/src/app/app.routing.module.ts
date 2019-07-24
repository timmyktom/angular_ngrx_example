import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './app-route.guard';

import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'books', component: BooksComponent, canActivate: [RouteGuard] },
    { path: 'cars', component: CarsComponent, canActivate: [RouteGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteGuard]
})
export class AppRoutingModule { }

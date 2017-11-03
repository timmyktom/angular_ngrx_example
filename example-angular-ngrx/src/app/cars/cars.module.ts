import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarsComponent } from './cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CarsComponent, 
    CarsListComponent, 
    CarDetailsComponent]
})
export class CarsModule { }

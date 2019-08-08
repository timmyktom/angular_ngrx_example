import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
 imports:      [ CommonModule ],
 declarations: [ LoaderComponent],
 exports:      [ CommonModule, FormsModule, LoaderComponent ]
})
export class SharedModule { }

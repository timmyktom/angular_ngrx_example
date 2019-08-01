import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../car.model';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  @Input() carsList: Car[];
  @Output() carSelect = new EventEmitter();

  selectedCarModel: string;

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    if (this.selectedCarModel) {
      this.carSelect.emit({CarModel: this.selectedCarModel});
    }
  }

}

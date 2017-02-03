import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  data: Car;
  @Input('selectedCarDetails')
  set selectedCarDetails(val) {
    this.data = <Car>val;
  }
  constructor() { }

  ngOnInit() {
  }

}

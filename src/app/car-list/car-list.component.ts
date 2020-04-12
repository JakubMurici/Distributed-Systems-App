import { Component } from '@angular/core';

import { cars } from '../car-list/cars';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  cars = cars;
}

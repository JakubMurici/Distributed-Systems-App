import {Component, OnInit} from '@angular/core';

import { CarService } from '../services/car.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Product[];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }
}

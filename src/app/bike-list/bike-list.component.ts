import {Component, OnInit} from '@angular/core';

import { BikeService } from '../services/bike.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  bikes: Product[];

  constructor(private bikeService: BikeService) {
  }

  ngOnInit(): void {
    this.bikeService.getBikes().subscribe(bikes => {
      this.bikes = bikes;
    });
  }
}

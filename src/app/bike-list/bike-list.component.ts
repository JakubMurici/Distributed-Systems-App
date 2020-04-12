import { Component } from '@angular/core';

import { bikes } from '../bike-list/bikes';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent {
  bikes = bikes;
}

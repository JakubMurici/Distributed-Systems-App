import { Component } from '@angular/core';

import { yachts } from '../yacht-list/yachts';

@Component({
  selector: 'app-yacht-list',
  templateUrl: './yacht-list.component.html',
  styleUrls: ['./yacht-list.component.css']
})
export class YachtListComponent {
  yachts = yachts;
}

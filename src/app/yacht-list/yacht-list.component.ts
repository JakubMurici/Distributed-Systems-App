import {Component, OnInit} from '@angular/core';

import { YachtService } from '../services/yacht.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-yacht-list',
  templateUrl: './yacht-list.component.html',
  styleUrls: ['./yacht-list.component.css']
})
export class YachtListComponent implements OnInit {

  yachts: Product[];

  constructor(private yachtService: YachtService) {
  }

  ngOnInit(): void {
    this.yachtService.getYachts().subscribe(yachts => {
      this.yachts = yachts;
    });
  }
}

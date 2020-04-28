import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../models/Product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  id: string;
  name: string;
  description: string;
  price: string;

  purchase() {
    window.alert('Congrats! You\'ve completed your purchase!');
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.description = this.route.snapshot.paramMap.get('description');
    this.price = this.route.snapshot.paramMap.get('price');

  }

}

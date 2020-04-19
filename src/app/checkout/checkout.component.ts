import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  product: Product[];

  share() {
    window.alert('Congrats! You\'ve completed your purchase!');
  }

  constructor() { }

  ngOnInit() { }

}

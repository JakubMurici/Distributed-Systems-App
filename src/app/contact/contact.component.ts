import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude: 31.8876067;
  longitude: -102.3251933;
/*
  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
*/
  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carsCollection: AngularFirestoreCollection<Product>;
  cars: Observable<Product[]>;

  constructor(private afs: AngularFirestore) {
    this.cars = this.afs.collection('cars').valueChanges();
  }

  getCars() {
    return this.cars;
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carsCollection: AngularFirestoreCollection<Product>;
  cars: Observable<Product[]>;

  constructor(private afs: AngularFirestore) {
    this.carsCollection = this.afs.collection('cars');
    this.cars = this.carsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getCars() {
    return this.cars;
  }
}

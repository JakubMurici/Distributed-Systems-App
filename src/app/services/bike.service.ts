import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  bikesCollection: AngularFirestoreCollection<Product>;
  bikes: Observable<Product[]>;

  constructor(private afs: AngularFirestore) {
    this.bikesCollection = this.afs.collection('bikes');
    this.bikes = this.bikesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getBikes() {
    return this.bikes;
  }

}

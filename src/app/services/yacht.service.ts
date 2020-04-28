import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class YachtService {
  yachtsCollection: AngularFirestoreCollection<Product>;
  yachts: Observable<Product[]>;

  constructor(private afs: AngularFirestore) {
    this.yachtsCollection = this.afs.collection('yachts');
    this.yachts = this.yachtsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getYachts() {
    return this.yachts;
  }
}

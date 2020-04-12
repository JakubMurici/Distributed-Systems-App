import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  bikesCollection: AngularFirestoreCollection<Product>;
  bikes: Observable<Product[]>;

  constructor(private afs: AngularFirestore) {
    this.bikes = this.afs.collection('bikes').valueChanges();
  }

  getBikes() {
    return this.bikes;
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class YachtService {
  yachtsCollection: AngularFirestoreCollection<Product>;
  yachts: Observable<Product[]>;

  constructor(private afs: AngularFirestore) {
    this.yachts = this.afs.collection('yachts').valueChanges();
  }

  getYachts() {
    return this.yachts;
  }
}

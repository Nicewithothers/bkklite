import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { Map } from "../../../model/map";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private afs: AngularFirestore, private st: AngularFireStorage) { }

  loadImageWithUrl() {
    return this.afs.collection<Map>('Maps').valueChanges();
  }

  loadImage(url: string) {
    return this.st.ref(url).getDownloadURL();
  }
}

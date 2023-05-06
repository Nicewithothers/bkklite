import { Injectable } from '@angular/core';
import {Firestore, setDoc, doc, } from "@angular/fire/firestore";
import {User} from "../../../model/user";
import {deleteDoc, docData} from "@angular/fire/firestore/lite";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: Firestore, private afs: AngularFirestore) { }

  createAndUpdateUser(user: User) {
    return setDoc(doc(this.fs, `Users/${user.id}`), user);
  }

  deleteUser(id: string) {
    return this.afs.collection<User>('Users').doc(id).delete();
  }

  getUserByID(id: string) {
    return docData(doc(this.fs, `Users/${id}`),{idField: 'id'}) as Observable<User>;
  }
}

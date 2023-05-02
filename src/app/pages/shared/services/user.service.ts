import { Injectable } from '@angular/core';
import {Firestore, setDoc, doc, } from "@angular/fire/firestore";
import {User} from "../../../model/user";
import {collection, collectionData, deleteDoc, docData} from "@angular/fire/firestore/lite";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: Firestore) { }

  createAndUpdateUser(user: User) {
    return setDoc(doc(this.fs, `Users/${user.id}`), user);
  }

  deleteUser(user: User) {
    return deleteDoc(doc(this.fs,`Users/${user.id}`));
  }

  getUserByID(id: string) {
    return docData(doc(this.fs, `Users/${id}`),{idField: 'id'}) as Observable<User>;
  }
  getAllUsers() {
    return collectionData(collection(this.fs, "Users"), {idField: 'id'})  as Observable<User[]>;
  }
}

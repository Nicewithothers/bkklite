import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) {
  }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email,password);
  }

  newPassword(email: string) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  userLoggedIn() {
    return this.afa.user;
  }

  currentUser() {
    return this.afa.currentUser.then();
  }

  logout() {
    return firebase.auth().signOut();
  }
}

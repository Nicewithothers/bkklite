import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) {
  }

  login(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  newPassword(email: string) {
    return this.afa.sendPasswordResetEmail(email);
  }

  signup(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  userLoggedIn() {
    return this.afa.user;
  }

  currentUser() {
    return this.afa.currentUser;
  }

  logout() {
    return this.afa.signOut();
  }
}

import {Component, Input, OnInit} from '@angular/core';
import firebase from "firebase/compat/app";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  @Input() loggedInUser?: firebase.User | null;

  constructor(protected router: Router, private as: AuthService, private us: UserService) {
  }

  ngOnInit() {
    this.as.userLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, e => {
      console.error(e);
      localStorage.setItem('user', JSON.stringify('null'));
    })
  }

  logout() {
    this.as.logout().then(() => {
      console.log("Logged out successfully!");
    }).catch(e => {
      console.error(e);
    });
  }

  deleteUser() {
    this.as.currentUser().then(user => {
      user?.delete().then(() => {
        this.us.deleteUser(this.loggedInUser?.uid as string).then(() => {
          this.router.navigateByUrl("/login");
        }).catch(e => {
          console.error(e);
        })
      }).catch(e => {
        console.error(e);
      })
    }).catch(e => {
      console.error(e);
    })
  }
}

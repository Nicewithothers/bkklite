import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import firebase from "firebase/compat/app";
import {LineService} from "../shared/services/line.service";
import {first} from "rxjs";
import {Line} from "../../model/line";

@Component({
  selector: 'app-menetrend',
  templateUrl: './menetrend.component.html',
  styleUrls: ['./menetrend.component.scss']
})
export class MenetrendComponent implements OnInit {

  currentUser: firebase.User | null = null;
  lines: Line[] = [];

  constructor(private as: AuthService, private ls: LineService) {
  }
  ngOnInit(): void {
    this.as.userLoggedIn().subscribe(user => {
      this.currentUser = user;
      this.ls.getAllLines().pipe(first()).subscribe(lines => {
        lines.forEach(l => {
          this.lines.push(l);
        })
      })
    })
  }
}

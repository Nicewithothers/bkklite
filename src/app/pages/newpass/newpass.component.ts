import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.scss']
})
export class NewpassComponent {
  newpassForm = new FormGroup({
    email: new FormControl('')
  });
  constructor(private router: Router, private as: AuthService, private sb: MatSnackBar) {
  }

  newPass() {
    this.as.newPassword(this.newpassForm.get('email')?.value as string).then(() => {
      this.sb.open("Sikeresen elküldtük az emailt!",'', {duration: 2000, verticalPosition: "top"});
      this.router.navigateByUrl("/login");
    }).catch(e => {
      this.sb.open("Helytelen e-mail cím!", '',{duration: 2000, verticalPosition: "top"});
      console.error(e);
    });
  }

  back() {
    this.router.navigateByUrl("/login");
  }
}

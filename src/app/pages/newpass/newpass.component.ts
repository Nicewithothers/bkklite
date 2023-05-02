import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.scss']
})
export class NewpassComponent {
  newpassForm = new FormGroup({
    email: new FormControl('')
  });
  constructor(private router: Router, private as: AuthService) {
  }

  newPass() {
    this.as.newPassword(this.newpassForm.get('email')?.value as string).then(() => {
      console.log("Email sent to " + this.newpassForm.get('email')?.value + ".");
      this.router.navigateByUrl("/login");
    }).catch(e => {
      console.error(e);
    });
  }

  back() {
    this.router.navigateByUrl("/login");
  }
}

import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";
import {User} from "../../model/user";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  regForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordAgain: new FormControl(''),
  });

  constructor(private router: Router, private as: AuthService, private us: UserService) {
  }

  createAccount() {
    if (this.regForm.get('password')?.value === this.regForm.get('passwordAgain')?.value) {
      this.as.signup(this.regForm.get('email')?.value as string, this.regForm.get('password')?.value as string).then(sess => {
        const user: User = {
          id: sess.user?.uid as string,
          email: this.regForm.get('email')?.value as string,
          nev: this.regForm.get('name')?.value as string,
          regdatum: Date.now(),
          role: "user"
        }
        this.us.createAndUpdateUser(user).then(() => {
          console.log("User created successfully!");
          this.router.navigateByUrl("/menetrend");
        }).catch(e => {
          console.error(e);
        })
      }).catch(e => {
        console.error(e);
      });
    } else {
      this.regForm.controls['passwordAgain'].setErrors({
        'incorrect': true
      })
    }
  }

  back() {
    this.router.navigateByUrl("/login");
  }
}

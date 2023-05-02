import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private router: Router, private as: AuthService) {
  }

  ngOnInit(): void {
    this.as.userLoggedIn().subscribe(user => {
      if (user) {
        this.router.navigateByUrl("/menetrend");
      }
    });
  }

  login() {
    this.as.login(this.LoginForm.get('email')?.value as string, this.LoginForm.get('password')?.value as string).then(sess => {
      console.log(sess);
      this.router.navigateByUrl("/menetrend");
    }).catch(e => {
      console.error(e);
    });
  }

  register() {
    this.router.navigateByUrl("/register");
  }

  requestNewPass() {
    this.router.navigateByUrl("/newpass");
  }
}

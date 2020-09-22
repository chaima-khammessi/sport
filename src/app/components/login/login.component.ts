import { UserService } from './../../services/user.service';
import { Router } from '@angular/router'
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  logins: any = {};
  isInvalid: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailLogin: ['', [Validators.email, Validators.required]],
      pswLogin: ['', Validators.required]
    });

  }
  login() {
    this.userService.login(this.loginForm.value).subscribe(
      data => {

        if (data.message == '2') {
          this.router.navigate(['contact']);
        } else {
          this.isInvalid = true;
        }
      }
    )
  }
}

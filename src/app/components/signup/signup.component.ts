import { from } from 'rxjs';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../validators/mustMatchValidators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  users: any = {};
  constructor(private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.minLength(5)],
      lastName: ['', Validators.minLength(5)],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', Validators.required],
      confirmPwd: ['', Validators.minLength(8)],
      phone: ['', [Validators.maxLength(8), Validators.minLength(8)]]
    },
      { validator: MustMatch('pwd', 'confirmPwd') }
    );
  }
  signup() {
    console.log('this is my isgnUp', this.userForm.value);
    this.userService.addUser(this.userForm.value).subscribe(
      (data) => {
        console.log('service called', data);

      }
    )

  }

}


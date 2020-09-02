import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm:FormGroup;

  constructor(  private formBuilder:FormBuilder)  
   
      
    
   
  { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.minLength(5)],
      lastName: ['', Validators.minLength(5)],
      email: ['',[ Validators.email, Validators.required]],
      pwd: ['', Validators.required],
      confirmPwd: ['', Validators.minLength(8)],
      phone: ['', [Validators.maxLength(8),Validators.minLength(8)]]
    });
  }
  signup(){
    alert('signup');
  }

}

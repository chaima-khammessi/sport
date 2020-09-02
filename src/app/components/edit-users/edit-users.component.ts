import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  id:number;
  user:any;
  userForm:FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm =  this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      adress: ['']
    });
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(
      x => {
        this.user = x;
      }
    )

  }
  validateEdit(){   
    this.userService.editUser(this.user).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }


}

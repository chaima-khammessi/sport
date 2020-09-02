import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input()user:any;
    users: any = [];
    id:number;


  constructor( 
    private userService:UserService ,
    private route:Router) { }

  ngOnInit(): void {
    
    
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data ;
       
        
      },
      error=>{
        console.log(error);
        
      }
    
    )}
   

    deleteUser(id:number){
      this.userService.deleteUser(id).subscribe(
        () => {
          this.userService.getAllUsers().subscribe(
            x=>{this.users=x;
            }
          )
        }
      )}
     
    
      goToDisplayUser(id:number){
        this.route.navigate([`display-user/${id}`]);
      }
      goToEditUser(id:number){
        this.route.navigate([`editUser/${id}`]);
      }
      
  }


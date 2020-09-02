import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
 
    @Input()user:any;
    users: any = [];
    id:number;


  constructor( private userService: UserService,
               private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    

    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data 
        
      },
      error=>{
        console.log(error);
        
      }
    
    )}
    deleteUser(id:number){
      this.userService.deleteUser(id).subscribe(
        () => {
          alert('user delete')
        }
      )
  }
  

}

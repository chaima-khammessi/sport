import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'api/users';

  constructor(private httpClient:HttpClient) {}

   getAllUsers(){
     return this.httpClient.get(this.userUrl);
   }
   getUserById(id:number){
     return this.httpClient.get(`${this.userUrl}/${id}`);
   }
   deleteUser(id:number){
     return this.httpClient.delete(`${this.userUrl}/${id}`);
   }
   addUser(users:any){
     return this.httpClient.post(this.userUrl,users);

   }
   editUser(users:any){
     return this.httpClient.put(`${this.userUrl}/${users.id}`,users);


   }

}
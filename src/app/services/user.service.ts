import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get<{ message: string, users: any }>(`${this.userUrl}/allUsers`);
  }
  getUserById(id: number) {
    return this.httpClient.get<{ message: string, users: any }>(`${this.userUrl}/allUsers/${id}`);
  }
  deleteUser(id: number) {
    return this.httpClient.delete(`${this.userUrl}/allUsers/${id}`);
  }
  addUser(users: any) {
    return this.httpClient.post(`${this.userUrl}/allUsers`, users);

  }
  editUser(users: any) {
    return this.httpClient.put<{ message: string }>(`${this.userUrl}/allUsers/${users.id}`, users);

  }

  login(user: any) {
    return this.httpClient.post<{ message: string, user: any }>(`${this.userUrl}/allLogin`, user)
  }

}
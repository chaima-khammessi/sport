import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  loginUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllLogin() {
    return this.httpClient.get<{ message: string, login: any }>(`${this.loginUrl}/allLogin`);
  }
  getLoginById(id: number) {
    return this.httpClient.get<{ message: string, login: any }>(`${this.loginUrl}/allLogin/${id}`);
  }
  deleteLogin(id: number) {
    return this.httpClient.delete(`${this.loginUrl}/allLogin/${id}`);
  }
  addLogin(login: any) {
    return this.httpClient.post(`${this.loginUrl}/allLogin`, login);

  }
  editLogin(login: any) {
    return this.httpClient.put<{ message: string }>(`${this.loginUrl}/allLogin/${login.id}`, login);
  }


}
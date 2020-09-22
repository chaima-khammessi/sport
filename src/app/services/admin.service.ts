import { AddMatchComponent } from './../components/add-match/add-match.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminUrl = 'api/admin';

  constructor(private httpClient: HttpClient) { }

  getAllAdmin() {
    return this.httpClient.get(this.adminUrl);
  }
  getAdminById(id: number) {
    return this.httpClient.get(`${this.adminUrl}/${id}`);
  }
  deleteAdmin(id: number) {
    return this.httpClient.delete(`${this.adminUrl}/${id}`);
  }
  addMatch(admin: any) {
    return this.httpClient.post(this.adminUrl, admin);

  }
  editMatch(admin: any) {
    return this.httpClient.put(`${this.adminUrl}/${admin.id}`, admin);


  }

}

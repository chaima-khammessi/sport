import { AddMatchComponent } from './../components/add-match/add-match.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllMatches() {
    return this.httpClient.get<{ message: string, matches: any }>(`${this.matchUrl}/allMatches`);
  }
  getMatchById(id: number) {
    return this.httpClient.get<{ message: string, match: any }>(`${this.matchUrl}/allMatches/${id}`);
  }
  deleteMatch(id: number) {
    return this.httpClient.delete(`${this.matchUrl}/allMatches/${id}`);
  }
  addMatch(match: any) {
    return this.httpClient.post(`${this.matchUrl}/allMatches`, match);

  }
  editMatch(match: any) {
    return this.httpClient.put<{ message: string }>(`${this.matchUrl}/allMatches/${match.id}`, match);


  }

}

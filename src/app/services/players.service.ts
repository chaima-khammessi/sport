import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllPlayers() {
    return this.httpClient.get<{ message: string, players: any }>(`${this.playerUrl}/allPlayers`);
  }
  getplayerById(id: string) {
    return this.httpClient.get<{ message: string, player: string }>(`${this.playerUrl}/allPlayers/${id}`);
  }
  deletePlayer(id: number) {
    return this.httpClient.delete(`${this.playerUrl}/allPlayers/${id}`);
  }
  addPlayer(players: any, image: File) {
    let formData = new FormData();
    formData.append('name', players.name);
    formData.append('post', players.post);
    formData.append('age', players.age);
    formData.append('img', image);
    return this.httpClient.post<{ message: string }>
      (`${this.playerUrl}/allPlayers`, formData);

  }
  editPlayer(players: any) {
    return this.httpClient.put<{ message: string }>(`${this.playerUrl}/allPlayers/${players.id}`, players);


  }

}
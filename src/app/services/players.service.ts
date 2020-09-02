import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerUrl = 'api/players';

  constructor(private httpClient:HttpClient) {}

   getAllPlayers(){
     return this.httpClient.get(this.playerUrl);
   }
   getplayerById(id:number){
     return this.httpClient.get(`${this.playerUrl}/${id}`);
   }
   deletePlayer(id:number){
     return this.httpClient.delete(`${this.playerUrl}/${id}`);
   }
   addPlayer(players:any){
     return this.httpClient.post(this.playerUrl,players);

   }
   editPlayer(players:any){
     return this.httpClient.put(`${this.playerUrl}/${players.id}`,players);


   }

}
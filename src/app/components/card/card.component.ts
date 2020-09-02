import { PlayersService } from './../../services/players.service';
import { PlayersComponent } from './../players/players.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  players:any;

  constructor( private playerService:PlayersService) { }

  ngOnInit(): void {
    this.players = [
      { id: 1, read: 'Read more', image: 'assets/images/img_1.jpg', date: "19/08/2020",paragraphe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.',question:'Romolu to stay at Real Nadrid?' },
      { id: 2, read: 'Read more', image: 'assets/images/img_1.jpg', date: "19/08/2020",paragraphe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.',question:'Romolu to stay at Real Nadrid?' },
      { id: 3, read: 'Read more', image: 'assets/images/img_1.jpg', date: "19/08/2020",paragraphe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.',question:'Romolu to stay at Real Nadrid?' }
    ]
    
  }
  

  

  updatePlayers(players:any){
    this.players=players;
  }

}




/*deletePlayer(id:number){
  this.matchService.deleteMatch(id).subscribe(
    ()=>{
       this.matchService.getAllMatches().subscribe(
         x=>{
           this.newMatches.emit(x);
         }
       )
    }
    )
 }*/
import { PlayersService } from './../../services/players.service';
import { PlayersComponent } from './../players/players.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  players: any;

  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      data => {
        console.log('data', data);

        this.players = data.players;
      }
    )

  }
  updatePlayers(players: any) {
    this.players = players;
  }

}
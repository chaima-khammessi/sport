import { Router } from '@angular/router';
import { PlayersService } from './../../services/players.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-cartnews',
  templateUrl: './cartnews.component.html',
  styleUrls: ['./cartnews.component.css']
})
export class CartnewsComponent implements OnInit {
  y: any;
  res: number[];
  users: any;
  cartnews: any;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getAllPlayers().subscribe(
      data => {
        console.log('this is my player', data);

        this.cartnews = data.players;
      }
    )
  }
}


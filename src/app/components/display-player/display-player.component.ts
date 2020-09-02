import { ActivatedRoute } from '@angular/router';
import { PlayersComponent } from './../players/players.component';
import { PlayersService } from './../../services/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  player:any;
  id:number;

  constructor(private playersService:PlayersService,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=+this.activateRoute.snapshot.paramMap.get('id');
    this.playersService.getplayerById(this.id).subscribe(
      x=> {
        this.player = x
      }
    )
   
   
  }

}

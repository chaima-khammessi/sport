import { PlayersService } from './../../services/players.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @Input()dataPlayer:any;
  @Output( )newPlayer:EventEmitter<any> = new EventEmitter();

    players: any = {};
    
  constructor( private router:Router,
    private playersService:PlayersService) { }

  ngOnInit(): void {
    
  }
  goToPlayer(id:number){

    this.router.navigate([`display-player/${id}`]);
  }
  deletePlayer(id:number){
    this.playersService.deletePlayer(id).subscribe(
      () => {
      this.playersService.getAllPlayers().subscribe(
        x=>{
         this.newPlayer.emit(x);
          
        }
      )
      }
    )}}

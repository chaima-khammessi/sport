import { MatchService } from './../../services/match.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() dataMatch: any;
  @Output( )newMatches:EventEmitter<any> = new EventEmitter();
  match: any = {};
  

  constructor( private router:Router,
    private matchService:MatchService) { }

  ngOnInit(): void {
  }

  valider() {
    console.log('add-match', this.match);
  }

  compare(a: number, b: number) {

    if (a > b) {
      return 'win'
    }
    else if (a < b) {
      return 'lose'
    }
    else if (a == b) {
      return 'draw'
    }

  }
  goToMatch(id:number){
    this.router.navigate([`displayMatch/${id}`]);

  }
    deleteMatch (id:number){
     this.matchService.deleteMatch(id).subscribe(
       ()=>{
          this.matchService.getAllMatches().subscribe(
            x=>{
              this.newMatches.emit(x);
            }
          )
       }
       )
    }


}

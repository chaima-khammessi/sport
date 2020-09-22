import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  match: any;
  resultat: string;



  constructor(
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    //Call service
    this.matchService.getAllMatches().subscribe(
      data => {
        this.match = data.matches;
      }

    )
  }

  updateMatches(matches: any) {
    this.match = matches;
  }
}

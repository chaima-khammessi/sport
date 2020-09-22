import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})


export class DisplayMatchComponent implements OnInit {
  match: any;
  id: any;
  constructor(private matchService: MatchService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      x => {
        this.match = x.match
      }
    )

  }

}

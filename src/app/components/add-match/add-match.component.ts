import { MatchService } from './../../services/match.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  match: any = {};
  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }

  valider() {
    console.log('This is my match', this.match);
    this.matchService.addMatch(this.match).subscribe(
      () => {
        console.log('service called');

      }

    )

  }


}




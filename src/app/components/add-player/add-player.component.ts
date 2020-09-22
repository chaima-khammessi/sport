import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlayersService } from './../../services/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  playerForm: FormGroup;
  imagePreview: string;
  constructor(private playersService: PlayersService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.playerForm = this.fb.group({
      name: [''],
      post: [''],
      age: [''],
      img: [''],

    })
  }
  validate() {

    this.playersService.addPlayer(this.player, this.playerForm.value.img).subscribe(
      data => {
        console.log('returned data', data);
        this.router.navigate(['players']);
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.playerForm.patchValue({ img: file });
    this.playerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}

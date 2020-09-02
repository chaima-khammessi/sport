import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact:any={};
  constructor() { }

  ngOnInit(): void {
  }
  valider(){
    alert('button valider')
    console.log('contact', this.contact);
    
  }

}

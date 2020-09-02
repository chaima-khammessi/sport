import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
    { id: 1, name: 'Football League', name2: 'Soccer', image: 'assets/images/logo_1.png',image2: 'assets/images/logo_2.png', date: "19/08/2020",time:'9:30 AM GMT+0',score:'5',score2:'3' },
    { id: 2, name: 'Football League', name2: 'Soccer', image: 'assets/images/logo_1.png',image2: 'assets/images/logo_2.png', date: "19/08/2020",time:'9:30 AM GMT+0',score:'3',score2:'3' },
    { id: 3, name: 'Football League', name2: 'Soccer', image: 'assets/images/logo_1.png',image2: 'assets/images/logo_2.png', date: "19/08/2020",time:'9:30 AM GMT+0',score:'2',score2:'3' },
   ];
   let players= [
    { id:1,name:'salah', poste:'attaquant',age:'31'},
    { id:2,name:'mohamed', poste:'attaquant',age:'29'},
    { id:3,name:'yahya', poste:'attaquant',age:'30'},
    { id:4,name:'youssef', poste:'attaquant',age:'25'}
  ];

  let users = [
    { id:1,firstName:'salah',lastName:'ben ali',age:'31',adress:'auoina'},
    { id:2,firstName:'youssef',lastName:'hamza',age:'29',adress:'arriana'},
    { id:3,firstName:'Mohamed',lastName:'ben yahya',age:'30',adress:'soukra'},
    { id:4,firstName:'ahmed',lastName:'ben ali',age:'25',adress:'ghazela'}
  ];

   
   return{matches,players,users};
  }
}
 

import { PlayersService } from './../../services/players.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cartnews',
  templateUrl: './cartnews.component.html',
  styleUrls: ['./cartnews.component.css']
})
export class CartnewsComponent implements OnInit {
   //result:string;
  
 // x:number;
  y:any;
  res:number[];
  users:any;
  cartnews:any;

  constructor() { }

  ngOnInit(): void {
    this.cartnews = [
      { id: 1, name: 'Neymar', image: 'assets/images/img_2.jpg', date: "19/08/2020" },
      { id: 2, name: 'Messi', image: 'assets/images/img_3.jpg', date: "20/08/2020" },
      { id: 3, name: 'Ronaldo', image: 'assets/images/img_1.jpg', date: "21/08/2020" },
    ]
    //this.result= this.calculMoyenne(12,13,15);
    //alert(this.result);
   //this.x=this.affichMax([5,8,9,14,6]);
   
   //alert(this.x);
   //alert(this.x)
   //alert(this.reverseArray([15,2,3,5,8]));

   //this.y=this.affichValNeg([-2,3,-9,5,-2,30]);
  
   //alert(this.y);
   /*this.y=(this.fussionner([-2,5,-1,1,8],[-1,2,-5,9]));
  alert(this.y);*/
  this.users=[
    {id:1, email:"test"},{id:2,email:"bjr"},{id:3,email:'bnj@gmail.com'}
  ]
   
    for(let i=0;i<this.users.length;i++){
      let isValid = this.verifEmail(this.users[i].email);
     // alert(`users N ${this.users[i].id} is ${isValid}`)
    }
    }

  calculMoyenne(math:number,phy:number,info:number){
    let moyenne;
     moyenne=(math*2+phy*3+info*4)/9;
    if ((moyenne)>0 && (moyenne)<8){
      alert('T.F');
    }
    else if((moyenne)>=8 && (moyenne)<10){
      alert('F');
    }
    else if((moyenne)>=10 && (moyenne)<13){
      alert('Assez bien');
    }
    else if((moyenne)>=13 && (moyenne)<16){
      alert(' bien');
    }
    else if((moyenne)>=16 && (moyenne)<19){
      alert(' T.bien');
    }
    else if((moyenne)>=19 && (moyenne)<20){
      alert(' Exelent');
    }
    return moyenne;
    
  }

  affichMax(T:number[]){
    
    
    let max=T[0];
   

    for(let i=0; i<T.length; i++){
     
      if (max<T[i]){
        max=T[i];

      }
    }
      return max;
  }

  reverseArray(T:number[]){
    let reversedArray=Array(T.length);
    for(let i=T.length-1; i>=0; i-- ){
      reversedArray[T.length-1-i]=T[i];

    }
    return reversedArray;
  }

  affichValNeg(T:number[]){
  
   
    for(let i=0; i<T.length; i++){
     return T.filter(function(value){
       return value<0;
     }); 
    }
  }
  verifEmail( email:string){
    let re = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');    
    return re.test(email);

  }

  fussionner(T:number[],M:number[]){
    
    let result
    result=Array( T.concat(M).sort(function(a,b){
      return (a-b);
    }));
    return result;
  }

}

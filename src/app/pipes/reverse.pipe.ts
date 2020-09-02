import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
 

  transform(value:string): any {
   //traitement pour inverser un chaine de caractere
  
   let res='';
   for(let i=value.length-1;i>=0; i--){
    res +=value[i]

   }
   return res;

  }

}

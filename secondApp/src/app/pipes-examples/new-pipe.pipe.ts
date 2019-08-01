import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  transform(value:string,gender:string): string {
   // value = "asfa"
    if(gender.toLowerCase() === "male"){
      return "Mr."+value;
    }
    else{
      return "Miss."+value
    }
    // return null;
  }

}

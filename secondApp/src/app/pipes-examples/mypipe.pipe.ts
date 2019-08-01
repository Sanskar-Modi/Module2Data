import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(num:number): number {
    if( num === 0 ){
      return 1;
    }
    else if(num === 1){
      return 1
    }
    else {
      return num * this.transform(num - 1)
    }
    
  }

}

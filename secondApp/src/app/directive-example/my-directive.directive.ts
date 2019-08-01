import { Directive ,ElementRef , OnInit} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
 
  constructor(private e:ElementRef) { 
    console.log("af"+e.nativeElement.value())
    if(e.nativeElement === "Mr.satish"){
      e.nativeElement.style.color = "red"
      e.nativeElement.style.backgroundColor = "black"
    }
   


  }


}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Dircol]'
})
export class DircolDirective {

  constructor( e:ElementRef) { 
    e.nativeElement.style.color="orange"
  }

}

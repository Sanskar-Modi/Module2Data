import { Component, OnInit } from '@angular/core';
import { PowerPipe } from './power.pipe'



@Component({
  selector: 'app-pipes-examples',
  templateUrl:'./pipes-examples.component.html' ,
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {


  birthday = new Date(1988, 3, 15);

  constructor() { }

  ngOnInit() {
  }

}

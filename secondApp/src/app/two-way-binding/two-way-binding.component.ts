import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/Employee'
@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  hello:string ="saf" ;

  @Input("empObj")employeeObj:Employee;

  constructor() {
    // this.hello = "hi"
   }
  //  changeName(){
  //    this.hello = this.hello
  //  }
  ngOnInit() {
   
  }

}

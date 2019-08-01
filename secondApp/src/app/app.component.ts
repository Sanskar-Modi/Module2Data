import { Component } from '@angular/core';
import { Employee } from './model/Employee'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  empdata:Employee[];
 //empObj:Employee[];
  constructor(){
    //let empObj1 = new Employee
    
    //let title =  'secondApp';
    this.empdata = [{
      ename : "satish",
      eid : 123,
      edesignation : "associate",
      eadd : "panvel",
      econtact : ["8690","84864"],
      egender : "male"
      
    },
    {
      ename : "sats",
      eid : 17,
      edesignation : "associatasfae",
      eadd : "chennai",
      econtact : ["8623490","2342384864"],
      egender : "female"
    }
  ] 
  }
}

import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../model/employee';


@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})



export class EmployeeComponent implements OnInit {
  //myString = "asf"
  // empName:string
  // empId:number
  // empSalary:number
  // empdata:Employee[];
  constructor() {
  
    //this.empdata=[{this.empdata.empName = "satish"}]; 
  //   this.empdata = [{
  //     ename : "satish",
  //     eid : 123,
  //     edesignation : "associate",
  //     eadd : "panvel",
  //     econtact : ["8690","84864"]
  //   },
  //   {
  //     ename : "sats",
  //     eid : 147,
  //     edesignation : "associatasfae",
  //     eadd : "chennai",
  //     econtact : ["8623490","2342384864"]
  //   }
  // ]   
    
   }



   @Input("empObj")employeeObj:Employee;
   @Input('childTitle')printTitle:string;
  ngOnInit() {
   
  }

}

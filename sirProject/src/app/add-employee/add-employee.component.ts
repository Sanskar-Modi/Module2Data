import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employeeservice';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  createdEmployee:Employee;

  createdFlag:boolean=false;

  service:EmployeeService;

  constructor(service:EmployeeService) {
    this.service=service;
   }

  ngOnInit() {
  }

   add(data:any){
    this.createdEmployee=new Employee(data.eid,data.ename);
    this.service.add(this.createdEmployee);
    this.createdFlag=true;
   }



}

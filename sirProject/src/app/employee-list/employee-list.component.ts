import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employeeservice';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  service:EmployeeService;
/**
 * when instance of EmployeeListComponent will be created , 
 * instance of EmployeeService will be passed as an argument
 * 
 * @param service 
 */
  constructor(service:EmployeeService) {
    this.service=service;
   }

  employees:Employee[]=[];

  /**
   * after deleting reassign the value to employees field in this component
   * to keep in sync with service
   * @param id 
   */
  delete(id:number){
    this.service.delete(id);
    this.employees=this.service.getEmployees();
  }

  //
  // id kept as default column
  //
  column:string="id"; 
  order:boolean=true;
  sort(column:string){
    //
    //if the click is for same column ,change the previous order
    // else order for ascending by default
    //  
    if(this.column==column )
    {
      this.order=!this.order;
    }else{
      this.order=true;
      this.column=column;
    }
  }

  ngOnInit() {
  this.employees=this.service.getEmployees();
  
  }

}



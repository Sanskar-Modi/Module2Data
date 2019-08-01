import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { MyServiceService } from '../my-service.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  // employeeForm: FormGroup
  createdEmployee:Employee

  service:MyServiceService
  constructor(service:MyServiceService) {
    this.service = service;
   }

  ngOnInit() {
    // this.employeeForm = new FormGroup({
    //   name: new FormControl(),
    //   id: new FormControl(),
    //   designation: new FormControl(),
    //   address: new FormControl(),
    //   contact: new FormControl(),
    //   gender : new FormControl()
 
    // })
  }

  add(data:any){
    this.createdEmployee = new Employee(data.id,data.name,data.designation
      ,data.address,data.contact,data.gender)
    this.service.add(this.createdEmployee)
  }

}

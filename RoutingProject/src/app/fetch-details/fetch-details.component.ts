import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee'
import { AppComponent } from '../app.component';
import { MyServiceService } from '../my-service.service';
import { FormGroup, FormControl } from '@angular/forms';
// declare var require: any
// const content = require('./empData.json');



// console.log(content)

@Component({
  selector: 'app-fetch-details',
  templateUrl: './fetch-details.component.html',
  styleUrls: ['./fetch-details.component.css']
})
export class FetchDetailsComponent  implements OnInit {

  service:MyServiceService

  employeeForm: FormGroup
  constructor( service:MyServiceService ){
    this.service = service;
  
  }
  employee:Employee[]=[];
  ngOnInit() {
    this.employeeForm = new FormGroup({
      eid: new FormControl(),
      econtact:new FormControl()
    })
    this.service.fetchEmployeeData();

    this.employee = this.service.getEmployee();
  }

  isUpdateOpenClick:boolean = true;
  updateDataOpen(){
    
      this.isUpdateOpenClick = !this.isUpdateOpenClick;
    
  }
  onSubmit(){
    // console.log(data)
    console.log("sfsd"+this.employeeForm.get("eid").value)
    this.service.update(this.employeeForm.get("eid").value,this.employeeForm.get("econtact").value);
  }

}

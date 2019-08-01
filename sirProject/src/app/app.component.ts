import { Component, OnInit } from '@angular/core';
import { of, Observable, OperatorFunction } from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EmployeeService, Employee } from './employeeservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'employee-project';

  
  service:EmployeeService;
  router:Router;
  /**
   * injecting this component with service and router
   * 
   * @param service 
   * @param router 
   */
  constructor(service:EmployeeService,router:Router){
    this.service=service;
    this.router=router;
  }

  ngOnInit(){
    //
    //redirect to listing component at start
    //
    this.router.navigate(['app-employee-list'])
  }

   
   
}


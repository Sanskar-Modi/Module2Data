import { Component, OnInit ,Input} from '@angular/core';
import { Employee } from '../model/Employee'
@Component({
  selector: 'app-employee-on-click',
  templateUrl: './employee-on-click.component.html',
  styleUrls: ['./employee-on-click.component.css']
})
export class EmployeeOnClickComponent implements OnInit {

  constructor() { }
  @Input("empObj")employeeObj:Employee;
  isCollapsed:boolean = true;
  buttonValue:string = "show"
  check(){
    this.isCollapsed = !this.isCollapsed;
    if(!this.isCollapsed){
      this.buttonValue = "hide"
    }
    else{
      this.buttonValue = "show"
    }
  }
  ngOnInit() {
  }

}

import { Component, OnInit ,Input} from '@angular/core';
import { Employee } from '../model/Employee'
@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  constructor() { }
  @Input("empObj")employeeObj:Employee;
  ngOnInit() {
  }
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

}

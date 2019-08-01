import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {


  employeeForm: FormGroup
  newForm: FormGroup

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullname: new FormControl(),
      email: new FormControl()

    });
  }
  onSubmit(): void{
    console.log(this.employeeForm.get("fullname").value)
    alert(this.employeeForm.get("fullname").value)
  }

}

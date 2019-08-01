import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  http:HttpClient ;
  employee:any[]=[];

  constructor( http:HttpClient ) { 
    this.http = http;
  }

  getEmployee():Employee[]{
    return this.employee;
  }
  fetched:boolean = false;
  fetchEmployeeData(){
    this.http.get('./assets/empData.json')
             .subscribe((data) => {
               console.log("this is data format"+ data)
               if(!this.fetched){
                 this.convert(data);
                 this.fetched = true;
               }
             }
            )
  }
  // employee:Employee[]=[]
  convert(data:any){
    for(let a of data){
      console.log(data[0])
      console.log("this is data from convert "+a)
      let e = new Employee(a.eid,a.ename,a.edesignation,a.eadd,a.econtact,a.egender);
      this.employee.push(e)
      console.log(this.employee)
    }

  }

  add(data:Employee){
    this.employee.push(data)
  }

  update(eid:number,econtact:number){
    // let eid = data.eid;
    // let mycontact = data.econtact;
    for(let i = 0; i < this.employee.length ; i++){
      if(eid == this.employee[i].eid){
        this.employee[i].econtact = econtact;
        console.log("updated contact"+this.employee[i].econtact)
        break;
      }
      else{
        console.log("not here")
      }
    }
    console.log("my array"+this.employee)
  }

}

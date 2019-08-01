import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * decorator/annotation which passes the information that the 
 * class (EmployeeService) should be used for injection
 */
@Injectable()
export class EmployeeService{

    http:HttpClient;

    employees:Employee[]=[];

    /**
     * inject employee service whith HttpClient object so when instance of empoyee service
     *  will be created by angular, HttpClient object will be passed as an argument
     * 
     * @param http 
     */
   constructor(http:HttpClient){
       this.http=http;
       this.fetchEmployees();
      }

   fetched:boolean=false;
 /**
  * fetching json by making get request and subscribing to it ,this is not a blocking call
  */
    private fetchEmployees(){
        this.http.get('./assets/employees.json').subscribe(
         //
         //short hand for the function which is passed as argument to subscribe method
         // yes Function is passed as an argument ! , 
         //the function definition is similar to lambda in java ,
         //data is argument passed in function
         //
          data=>{
            if(!this.fetched){  
            this.convert(data);
            this.fetched=true;
            }
          });
        
       }
     
       getEmployees():Employee[]{
           return this.employees;
       }

   convert(data:any){
    for(let o of data){
      let e=new Employee(o.id,o.name);
      this.employees.push(e);
    }   

}

/**
 * find the index of the object with same employee id and then use array's 
 * splice method to remove object 
 * 
 * @param eid 
 */
delete(eid:number){
    let foundIndex:number=-1;
    for(let i=0;i<this.employees.length;i++){
       let e=this.employees[i];
        if(eid==e.id){
        foundIndex=i ;
        break;
     }
    }
    //
    // first argument is the index,
    // second argument is the number of items we want to delete after this index
    //
    this.employees.splice(foundIndex,1);  
  }
  

  add(e:Employee){
    //
    //adding employee at end in array
    //  
    this.employees.push(e);
  }

  
}

export class Employee{
    static COLUMNS=['id','name'];
    id:number;
    name:string;
    constructor(id:number,name:string){
    this.id=id;
    this.name=name;
    }
  }

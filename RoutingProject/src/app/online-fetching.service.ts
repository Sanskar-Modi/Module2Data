import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnlineData } from './models/onlineData';
@Injectable({
  providedIn: 'root'
})
export class OnlineFetchingService {
  service:HttpClient
  constructor(http:HttpClient) {
    this.service = http;
   }

   onlineData:OnlineData[] = [];
   fetched:boolean = false;

   getData():OnlineData[]{
     return this.onlineData
   }

   fetchData(){
     this.service.get("https://reqres.in/api/users/2")
                 .subscribe(data =>{
                   let myjson = JSON.stringify(data)
                //    for (var key in data) {
                //     //console.log(key);
                //     console.log("this is my json"+data[key]);
                //     let e = new OnlineData(data[key].id,
                //       data[key].email,
                //       data[key].first_name,
                //       data[key].last_name,
                //       data[key].avatar);
                //     console.log(e)
                // }
                   //console.log("this is data i print"+myjson["data"])
                   if(!this.fetched){
                    this.convert(data);
                    this.fetched = true;
                  }
                 })
   }
   convert(data:any){
    // let mydata = JSON.stringify(data)
    console.log("this data"+data)
    for(let m in  data){
      console.log("this is data from convert ")    
     let e = new OnlineData(data[m].id,
        data[m].email,
        data[m].first_name,
        data[m].last_name,
        data[m].avatar);
      this.onlineData.push(e)
    }
  }

  
}

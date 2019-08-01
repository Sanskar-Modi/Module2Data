import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './Models/dataParseModel';

@Injectable({
  providedIn: 'root'
})
export class DataParseService {

  service:HttpClient

  constructor(service:HttpClient) { 
    this.service = service
  }
  isFetched:boolean = false
  dataArr:Data[] = [];
  fetchData(){
    this.service.get('./assets/data.json')
                .subscribe(data => {
                  if(!this.isFetched){
                    this.convert(data);
                    this.isFetched = true
                  }
                })
  }

  getData():Data[] {
    return this.dataArr;
  }

  convert(data:any){
    for(let a of data){
      let e = new Data(a.dptId,a.dptName);
      
      this.dataArr.push(e);
      console.log(this.dataArr)
    }
  }

  delete(key:number){
    let foundKey:number = -1;
    for(let i=0 ; i < this.dataArr.length; i++){
        //let e = this.dataArr[i];
        if(key == this.dataArr[i].deptId){
          foundKey = i;
          break;
        }
       
    }
    this.dataArr.splice(foundKey,1)
    
    console.log("from service"+this.dataArr)
  }
  sortById(){
    this.dataArr.sort()
    console.log("from sort service"+this.dataArr)
  }

}

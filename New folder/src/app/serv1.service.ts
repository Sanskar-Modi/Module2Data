import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {
dep1:databean[]=[];
http:HttpClient;
  constructor(http:HttpClient) {this.http=http; }
  a1:Boolean=false;
  fetch()
  {  
this.http.get('./assets/departments.json')
.subscribe( d1=>{
if(!this.a1){
this.m1(d1);
this.a1=true;
}
});
  }
  m1(d1:any)
  {
    for(let w of d1){
    let q=new databean(w.dptId,w.dptName);
    this.dep1.push(q);
    }
  }
  
  get1():databean[]{
    return this.dep1;
  }

  delete(id:number)
  {
    let x:number=0;
    for(let i=0;i<this.dep1.length;i++)
    {
      let e=this.dep1[i];
      if(id==e.dptId)
      {
        x=i;
        break;
      }
    }
    this.dep1.splice(x,1);
  }


  a2:boolean=false;
  name2():databean[]
  {
    if(!this.a2)
    {
    let br= this.dep1.sort((a, b) => {
      if (a.dptName < b.dptName) 
       return -1;
      else if (a.dptName > b.dptName) return 1;
      else return 0;
    });
    this.a2=true;
    return br;
  }else{
    let br= this.dep1.sort((a, b) => {
      if (a.dptName < b.dptName) return 1;
      else if (a.dptName > b.dptName) return -1;
      else return 0;
    });
    this.a2=false;
    return br;
  }
  }

  a3:boolean=false;
  id2():databean[]
  {
    if(!this.a3)
    {
    let br=this.dep1.sort((a,b)=>{ return b.dptId - a.dptId; });
    this.a3=true;
   return br;
   
    }else{
      let br=this.dep1.sort((a,b)=>{ return a.dptId - b.dptId; });
      this.a3=false;
  return br;
    }
  }


} 
export class databean{
  dptId:number;
  dptName:string;
  constructor(depId:number,dptName:string)
  {
    this.dptId=depId;
    this.dptName=dptName;
  }
}

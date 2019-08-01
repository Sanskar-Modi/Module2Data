import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  mydate:string;
  myName:string;
  constructor() { 
    let a = 1
    let printDate = () => {
      let mydate1 = new Date()
      this.mydate = mydate1.toDateString()+"  "+mydate1.toLocaleTimeString()+" "+a++;
      //console.log("aaa"+a)
    } 
    
    setTimeout(printDate,10000)
    setInterval(printDate,5);
  }

  ngOnInit() {
  }

}

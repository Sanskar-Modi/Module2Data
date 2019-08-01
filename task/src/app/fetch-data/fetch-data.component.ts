import { Component, OnInit } from '@angular/core';
import { DataParseService } from '../data-parse.service';
import { Data } from '../Models/dataParseModel';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  service:DataParseService;
  myArr:Data[] = [];
  constructor(service:DataParseService) {
    this.service = service
   }

  ngOnInit() {

    this.service.fetchData();
    this.myArr = this.service.getData();
    console.log("asifaksfnkanukf"+this.myArr[0].deptId)
    // console.log("from componenet"+this.myArr+"    sagf")
  }
  deleteRow(key:number){
    console.log("row deleted")
    this.service.delete(key);
    this.myArr = this.service.getData();
    console.log(this.myArr)
  }
  sortById(){
    console.log("asfa")
    this.service.sortById();
    this.myArr = this.service.getData();
    console.log("from component sort"+this.myArr)
  }

}

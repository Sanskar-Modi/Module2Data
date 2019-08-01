import { Component, OnInit } from '@angular/core';
import { Serv1Service, databean } from '../serv1.service';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  service:Serv1Service;
  constructor(service:Serv1Service) {this.service=service }
dept:databean[];
id1()
{
  this.dept=this.service.id2();

}
name1()
{
  this.dept=this.service.name2();
  
}
delete(id:number)
{
  this.service.delete(id);
  this.dept=this.service.get1();
}
  ngOnInit() {
    this.service.fetch();
    this.dept=this.service.get1();
  }

}

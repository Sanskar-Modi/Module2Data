import { Component, OnInit } from '@angular/core';
//import * as angular from '@angular/core';
//import * as myjson from 'src/app/new-cmp/file.json';
declare var require: any
const content = require('./file.json');
// import  content from './file.json';







console.log("data from json "+content.primaryBright);
@Component({
  selector: 'app-emp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})

class Hero{
  
    public id: number
    public name: string
}

export class NewCmpComponent  implements OnInit{
 //name:string = 'satish';
  simpleJson = {
    'empId':15,
    'empName':"sidatish"
  }
  empLastName:string ;
  hero:Hero[];
  constructor() { 
    
  }
  title = 'Tour of Heroes';
  heroes = [
    // new Hero(1, 'Windstorm'),
    // new Hero(13, 'Bombasto'),
    // new Hero(15, 'Magneta'),
    // new Hero(20, 'Tornado')
  ];
 // myHero = this.heroes[0];
  
  myData(){
    // this.hero = [
    //   {

    //   }
    // ]
    let date = new Date();
      
    
    let Name:string = 'satish';
  }
  ngOnInit(){
    

  }
  
}

console.log("hi outside")


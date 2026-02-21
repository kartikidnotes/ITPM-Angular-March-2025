import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-strongtypeexample',
  imports: [CommonModule],
  templateUrl: './strongtypeexample.html',
  styleUrl: './strongtypeexample.css',
})
export class Strongtypeexample {

  // strongly typed- variables and function
  name:string='Angular Framework'
  version:number=19;

  getFramework():string{
    return this.name+'  '+this.version;
  }

  // strongly typed- array
  marks:number[]=[78,98,67,88];
  getTotal():number{
    let sum=0;
    for(let m of this.marks){
      sum+=m;
    }
    return sum;
  }

  // strongly typed- objects
  student:{id:number,sname:string,course:string,marks:number}={
    id:1,
    sname:'Ram',
    course:'Angular',
    marks:98
  }

  //variable and function
  add(a:number,b:number):number{
    return a+b
  }

  //boolean value
  // isLoggedIn:boolean=true
  isLoggedIn:boolean=false

  //multiple objects
  students:{id:number,name:string}[]=[
    {id:1,name:"Ram"},
    {id:2,name:"Raj"},
    {id:3,name:"Jay"},
    {id:4,name:"Ajay"},
  ]


}

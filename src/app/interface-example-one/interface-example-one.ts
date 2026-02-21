import { Component } from '@angular/core';

class Employee{
  id:number;
  name:string;
  salary:number;

  constructor(id:number,name:string,salary:number){
    this.id=id;
    this.name=name
    this.salary=salary
  }
}

@Component({
  selector: 'app-interface-example-one',
  imports: [],
  templateUrl: './interface-example-one.html',
  styleUrl: './interface-example-one.css',
})
export class InterfaceExampleOne {

  emp=new Employee(1,"Ram",80000)
}

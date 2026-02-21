import { Component } from '@angular/core';

interface Student{
  id:number,
  name:string
}


@Component({
  selector: 'app-interface-example',
  imports: [],
  templateUrl: './interface-example.html',
  styleUrl: './interface-example.css',
})
export class InterfaceExample {

  //implementing interface using object
  student:Student={
    id:101,
    name:'Raj'
  }

}

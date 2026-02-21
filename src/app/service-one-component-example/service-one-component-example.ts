import { Component } from '@angular/core';
import { Serviceone } from '../serviceone';

@Component({
  selector: 'app-service-one-component-example',
  imports: [],
  templateUrl: './service-one-component-example.html',
  styleUrl: './service-one-component-example.css',
})
export class ServiceOneComponentExample {

  message:string =''

  constructor(private sobj:Serviceone){
    this.message=this.sobj.getMessage();
  }

}

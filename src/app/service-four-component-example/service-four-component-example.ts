import { Component } from '@angular/core';
import { Servicefour } from '../servicefour';

@Component({
  selector: 'app-service-four-component-example',
  imports: [],
  templateUrl: './service-four-component-example.html',
  styleUrl: './service-four-component-example.css',
})
export class ServiceFourComponentExample {

  product:any;

  constructor(private ps:Servicefour){
    this.product=this.ps.getProduct();
  }
}

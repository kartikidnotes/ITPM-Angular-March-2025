import { Component } from '@angular/core';
import { Servicefive } from '../servicefive';

@Component({
  selector: 'app-service-five-component-example',
  imports: [],
  templateUrl: './service-five-component-example.html',
  styleUrl: './service-five-component-example.css',
})
export class ServiceFiveComponentExample {

  constructor(public counter:Servicefive){

  }

  increase():void{
    this.counter.increment();
  }

  
 decrease():void{
    this.counter.decrement();
  }
  
}

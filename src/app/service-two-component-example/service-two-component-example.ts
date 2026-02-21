import { Component } from '@angular/core';
import { Servicetwo } from '../servicetwo';

@Component({
  selector: 'app-service-two-component-example',
  imports: [],
  templateUrl: './service-two-component-example.html',
  styleUrl: './service-two-component-example.css',
})
export class ServiceTwoComponentExample {

  result:number=0
  result1:number=0
  result2:number=0
  result3:number=0
  result4:number=0

  constructor(private cal:Servicetwo){
    this.result=this.cal.add(10,40)
    this.result1=this.cal.sub(51,40)
    this.result2=this.cal.mult(10,40)
    this.result3=this.cal.div(10,2)
    this.result4=this.cal.mod(11,2)
  }

}

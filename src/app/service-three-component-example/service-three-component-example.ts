import { Component } from '@angular/core';
import { Servicethree } from '../servicethree';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-service-three-component-example',
  imports: [CommonModule],
  templateUrl: './service-three-component-example.html',
  styleUrl: './service-three-component-example.css',
})
export class ServiceThreeComponentExample {

  subject:string[]=[]

  constructor(private sub:Servicethree){
    this.subject=this.sub.getLanguages()
  }

}

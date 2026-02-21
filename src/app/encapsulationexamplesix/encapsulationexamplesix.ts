import { Component } from '@angular/core';
import { applyWhenValue } from '@angular/forms/signals';

@Component({
  selector: 'app-encapsulationexamplesix',
  imports: [],
  templateUrl: './encapsulationexamplesix.html',
  styleUrl: './encapsulationexamplesix.css',
})
export class Encapsulationexamplesix {

  private age=40;
  setAge(value:number){
    if(value>0 && value<=100)
    {
      this.age=value
    }
  }

  getAge(){
    return this.age
  }
}

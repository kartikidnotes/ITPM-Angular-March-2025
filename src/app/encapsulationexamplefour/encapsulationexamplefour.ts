import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulationexamplefour',
  imports: [],
  templateUrl: './encapsulationexamplefour.html',
  styleUrl: './encapsulationexamplefour.css',
})
export class Encapsulationexamplefour {

  private password='admin@12345'

  validate(input:string){
    return input===this.password?'Login Successfully Done !':'Invalid Credentials';
  }

}

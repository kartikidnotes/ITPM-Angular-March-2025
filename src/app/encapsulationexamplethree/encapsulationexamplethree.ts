import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulationexamplethree',
  imports: [],
  templateUrl: './encapsulationexamplethree.html',
  styleUrl: './encapsulationexamplethree.css',
})
export class Encapsulationexamplethree {

  private _salary=30000;

//getter
  get salary(){
    return this._salary;
  }

  //setter
  set salary(amount:number){
    if (amount>0){
      this._salary+=amount
    }
  }
}

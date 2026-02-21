import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulationexamplefive',
  imports: [],
  templateUrl: './encapsulationexamplefive.html',
  styleUrl: './encapsulationexamplefive.css',
})
export class Encapsulationexamplefive {

  private quantity=1;

  getQuantity(){
    return this.quantity
  }

  increaseQty(){
    this.quantity++
  }

  decreaseQty(){
    this.quantity--
  }
}

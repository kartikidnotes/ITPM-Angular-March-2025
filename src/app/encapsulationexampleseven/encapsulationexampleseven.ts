import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulationexampleseven',
  imports: [],
  templateUrl: './encapsulationexampleseven.html',
  styleUrl: './encapsulationexampleseven.css',
})
export class Encapsulationexampleseven {

  private price=5000;

  getPrice(){
    return this.price
  }

  applyDiscount(){
    this.price-=1000
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulationexampleone',
  imports: [],
  templateUrl: './encapsulationexampleone.html',
  styleUrl: './encapsulationexampleone.css',
})
export class Encapsulationexampleone {


  //bank example

  private balance:number=20000;

  getBalance(){
    return this.balance
  }

  deposit(amount:number){
    if(amount>0){
      this.balance+=amount
    }
  }

  withdraw(amount:number){
    if(amount>this.balance){
      console.log("Insufficient Balance")
    }
    else{
      this.balance-=amount
    }
  }
}


// Modify balance --> is private 
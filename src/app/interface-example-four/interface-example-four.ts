import { Component } from '@angular/core';

interface Payment{
  pay(amount:number):string;
}


class UpiPayment implements Payment{

  pay(amount:number):string{
    return ` ₹ ${amount} paid using UPI Method ! `
  }
}
@Component({
  selector: 'app-interface-example-four',
  imports: [],
  templateUrl: './interface-example-four.html',
  styleUrl: './interface-example-four.css',
})
export class InterfaceExampleFour {

  payment=new UpiPayment();

  makePayment(){
    return this.payment.pay(20000);
  }
}

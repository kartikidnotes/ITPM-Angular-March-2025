import { Component } from '@angular/core';


interface Discount{

  applydiscount(price:number):number;

}

class FestivalDiscount implements Discount{

  applydiscount(price: number): number {
    return price-(price*0.1)  // 10% discount
  }
}
@Component({
  selector: 'app-interface-example-five',
  imports: [],
  templateUrl: './interface-example-five.html',
  styleUrl: './interface-example-five.css',
})
export class InterfaceExampleFive {


  discount=new FestivalDiscount();
}

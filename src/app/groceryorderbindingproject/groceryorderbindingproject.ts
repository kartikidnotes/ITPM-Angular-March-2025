import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-groceryorderbindingproject',
  imports: [FormsModule],
  templateUrl: './groceryorderbindingproject.html',
  styleUrl: './groceryorderbindingproject.css',
})
export class Groceryorderbindingproject {

  productName:string='Pasta'
  price:number=80;
  quantity:number=0
  discountApplied:boolean=false;
  imageURL:string='a.jpg'

  increaseQuantity(){
  this.quantity++;
  }

  decreaseQuantity(){
    this.quantity--;
  }

  getTotalPrice():number{
    let total=this.price*this.quantity;
    return this.discountApplied?total-50:total;
  }
}

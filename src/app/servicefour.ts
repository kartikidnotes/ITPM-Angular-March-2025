import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Servicefour {
  
  getProduct(){
    return{
      id:101,
      name:'Laptop',
      price:60000
    };
  }
}

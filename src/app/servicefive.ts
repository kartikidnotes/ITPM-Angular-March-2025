import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Servicefive {
  
  count:number=0;

  increment():void{
    this.count++
  }

  
  decrement():void{
    this.count--
  }
}

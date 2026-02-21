import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cabservice {

  calculateFare(distance:number):number{
    const baseFare=50
    const perKmRate=15
    return baseFare+(distance*perKmRate)
  }

  bookCab(name:string,distance:number){
    return{
      customerName:name,
      distance:distance,
      fare:this.calculateFare(distance),
      status:'Cab Booked Successfully!!! '
    };
  }
  
}

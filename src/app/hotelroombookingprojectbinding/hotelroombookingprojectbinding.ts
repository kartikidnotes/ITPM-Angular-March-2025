import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotelroombookingprojectbinding',
  imports: [FormsModule],
  templateUrl: './hotelroombookingprojectbinding.html',
  styleUrl: './hotelroombookingprojectbinding.css',
})
export class Hotelroombookingprojectbinding {

  hotelName="Pride Hotel";
  roomType="Standard";
  pricePerNight=2500;
  nights=1;
  breakfast=false;
  AC=false;
  pickup=false;
  
  roomImage='hotelroom.jpg'

  changeRoom(type:string){
    this.roomType=type;

    if(type==='Standard')
      this.pricePerNight=2500;
    if(type==='Deluxe')
      this.pricePerNight=4000;
    if(type==='Suite')
      this.pricePerNight=7000;
  }

  calculateTotal():number{
    let total=this.pricePerNight*this.nights;

    if(this.breakfast)
      total+=300*this.nights;
    if(this.AC)
      total+=500*this.nights;
    if(this.pickup)
      total+=1000

    return total;
  }


  confirmmBooking(){
    alert('Booking Confirmed Successfully!!!!')
  }
}

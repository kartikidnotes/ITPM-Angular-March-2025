import { Component } from '@angular/core';
import { Cabservice } from '../cabservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabserviceproject',
  imports: [FormsModule,CommonModule],
  templateUrl: './cabserviceproject.html',
  styleUrl: './cabserviceproject.css',
})
export class Cabserviceproject {

  name:string=''
  distance:number=0
  bookingDetails:any=null

  constructor(private cabservice:Cabservice){

  }

  bookCab(){
    this.bookingDetails=this.cabservice.bookCab(
      this.name,
      this.distance
    );
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  imports: [CommonModule],
  templateUrl: './structuraldirectives.html',
  styleUrl: './structuraldirectives.css',
})
export class Structuraldirectives {
  
  //ngIf
  showMessage:boolean=true;
  // showMessage:boolean=false;

  //ngFor
  items:string[]=['Angular','React','Python','DS']

  //event
  message:boolean=true;


  // check -- user has loggedIn /not 
  // isLoggedIn:boolean=true;
  isLoggedIn:boolean=false;


  color:string='green';

  isLogin=false;

  login(){
    this.isLogin=true;
  }

  logout()
  {
    this.isLogin=false;
  }


  // products=[
  //   {name:'Laptop',price:80000},
  //   {name:'Mobile Phone',price:8000},
  //   {name:'Charger',price:1000},
  //   {name:'Headphones',price:2000}   
  // ];

  products=[]

  
}


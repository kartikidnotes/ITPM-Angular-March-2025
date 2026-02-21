import { Component } from '@angular/core';
import { Userservice } from '../userservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sendercomponentdatasharinginservice',
  imports: [FormsModule],
  templateUrl: './sendercomponentdatasharinginservice.html',
  styleUrl: './sendercomponentdatasharinginservice.css',
})
export class Sendercomponentdatasharinginservice {

  name:string=''

  constructor(private userService:Userservice){}

  sendData(){
    this.userService.userName=this.name
  }

}

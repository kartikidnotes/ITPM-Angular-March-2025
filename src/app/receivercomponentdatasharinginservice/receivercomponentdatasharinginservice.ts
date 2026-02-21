import { Component } from '@angular/core';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-receivercomponentdatasharinginservice',
  imports: [],
  templateUrl: './receivercomponentdatasharinginservice.html',
  styleUrl: './receivercomponentdatasharinginservice.css',
})
export class Receivercomponentdatasharinginservice {

  constructor(public userService:Userservice){}
}

import { Component } from '@angular/core';
import { Childoutputdecorator } from '../childoutputdecorator/childoutputdecorator';

@Component({
  selector: 'app-parentoutputdecorator',
  imports: [Childoutputdecorator],
  templateUrl: './parentoutputdecorator.html',
  styleUrl: './parentoutputdecorator.css',
})
export class Parentoutputdecorator {

  // 1. Example 1
  message=""

  getMessage(msg:string){
    this.message=msg
  }

  // 2. Example 2
  count=0

  updateCounter(c:number){
    this.count+=c;
  }


  decreaseCounter(c: number) {
    this.count -= c;
  }

  //3. Example 3

  user:any;

  getUser(userData:any){
 this.user=userData
  }
}

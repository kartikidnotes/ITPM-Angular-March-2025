import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-childoutputdecorator',
  imports: [CommonModule],
  templateUrl: './childoutputdecorator.html',
  styleUrl: './childoutputdecorator.css',
})
export class Childoutputdecorator {
  // 1. Example one
  @Output() messageEvent=new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit('HEllo From the CHILD COMPONENET!!!!')
  }

  // 2.Example 2
  @Output() countEvent=new EventEmitter<number>();

  counter(){
    this.countEvent.emit(5)
  }
  // emit(5) --> will run the emit in multiple of 5

  @Output() decreaseEvent = new EventEmitter<number>();

  decreaseCounter() {
    this.decreaseEvent.emit(5); // decrease by 5
  }

  // 3.Example 3
  @Output() userEvent=new EventEmitter<any>();

  sendUser()
  {
    this.userEvent.emit({
      id:1,
      name:'Ram',
      role:'Developer' 
    });
  }

}

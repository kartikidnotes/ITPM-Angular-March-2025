import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges,Input} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [CommonModule],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements OnInit,OnChanges,OnDestroy {

  @Input() message!:string;

  constructor(){
    console.log("Constructor is called!!!!")
  }

  ngOnInit(): void {
    console.log("I'm in NgOnInit() function")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("I'm in ngOnChanges() function")
  }

  ngOnDestroy(): void {
    console.log("I;m Destroying the App using ngOnDestroy()")
  }
}



// Constructor -- OnInit -- OnChanges -- OnDestroy
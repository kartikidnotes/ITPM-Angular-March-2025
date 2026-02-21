import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedirective',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './attributedirective.html',
  styleUrl: './attributedirective.css',
})
export class Attributedirective {

  isRed:boolean=true;
  color:string='blue'
  size:number=20
}

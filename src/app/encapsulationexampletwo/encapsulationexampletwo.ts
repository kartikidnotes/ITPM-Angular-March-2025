import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulationexampletwo',
  imports: [],
  templateUrl: './encapsulationexampletwo.html',
  styleUrl: './encapsulationexampletwo.css',
})
export class Encapsulationexampletwo {

  //Student MArk System
  //adding 5 grace marks to student marks 
  // consider paper is of 100 marks so consider 95 as max
  private marks=99;

  getMarks(){
    return this.marks;
  }

  updateMarks(newMarks:number){
    if(this.marks>0 && this.marks<=95)
      this.marks+=newMarks
    else
      console.log("Cannot update marks beyond 100")
    }
  
}

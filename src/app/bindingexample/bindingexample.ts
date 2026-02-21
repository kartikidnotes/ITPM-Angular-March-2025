import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-bindingexample',
  imports: [FormsModule],
  templateUrl: './bindingexample.html',
  styleUrl: './bindingexample.css',
})
export class Bindingexample {

  //Interpolation 
  title="This is the Interpolation Example in Data Binding!!!"

  //property binding
  isDisabled=true

  //Event Binding
  count=0
  increment(){
    this.count++;
  }

  //Two-Way Binding 
  username=''

  name="Rat"
  age=5
  Profile='a.jpg'

  //event binding
  counter=0

  increase_counter(){
    this.counter++
  }

  decrease_counter(){
    this.counter--
  }

  reset()
  {
   this.counter=0
  }

  //two way binding 
  user=''
  password=''

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  imports: [],
  templateUrl: './datatypes.html',
  styleUrl: './datatypes.css',
})
export class Datatypes {

  name:string='Angular'
  version:number=19
  isFramework:boolean=true;

  language:string[]=["MERN","MEAN","Angular19",".Net"]

  student={
    id:1,
    name:"Raj"
  }


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReversestrPipe } from '../reversestr-pipe';
import { CapitalletterPipe } from '../capitalletter-pipe';
import { CountrycodePipe } from '../countrycode-pipe';
import { FilterPipe } from '../filter-pipe';
import { MaskmobilenumberPipe } from '../maskmobilenumber-pipe';
import { PowerPipe } from '../power-pipe';
import { ShortstrPipe } from '../shortstr-pipe';
import { SqaurePipe } from '../sqaure-pipe';
import { UserstatusPipe } from '../userstatus-pipe';
import { interval } from 'rxjs';
import { AgepipePipe } from "../agepipe-pipe";

@Component({
  selector: 'app-userdefinedpipes',
  imports: [CommonModule, FormsModule, ReversestrPipe, CapitalletterPipe, CountrycodePipe, FilterPipe, MaskmobilenumberPipe, PowerPipe, ShortstrPipe, SqaurePipe, UserstatusPipe, AgepipePipe],
  templateUrl: './userdefinedpipes.html',
  styleUrl: './userdefinedpipes.css',
})
export class Userdefinedpipes {

  name='IT Preneur';
  
    today=new Date();
  
    salary : number =50000;
  
    marks:number= 0.90;
    price : number=1234.5678567890;
  
    technologies=['DotNet','C#','Angular','ReactJS','C','DS']
  
    user={
      name:'Ram',
      role:'Developer',
      experience : 5
    }
  
  
    times=interval(1000);
  
    student={
      name:'Raj',
      subject : 'DS',
      marks : 80
    }
  
    message=new Promise(resolve=>{
      setTimeout(()=>{
        resolve('Welcome to Pipes Lecture!!!!')
      },5000);
    });
  
    gender='female'
  
    gendertype={
      male:'He is a Male Candidate',
      female:'She is a Female Candidate',
      other:'They all are Candidates'
    }
  
    filternames=['Angular','React','NextJS','Java']
    searchText='a'  
  
    dob=new Date('2001-05-10')
  
    users=[
      {name:"Ram",status:'Active'},
      {name:"Raj",status:'inctive'},
      {name:"Jay",status:'Blocked'},
      {name:"Ajay",status:'Pending'},
      {name:"Raj",status:'Active'}
    ]
}

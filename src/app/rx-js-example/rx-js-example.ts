import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-rx-js-example',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './rx-js-example.html',
  styleUrl: './rx-js-example.css',
})
export class RxJsExample implements OnInit {

  users: any[] = []
  errorMessage: string = ''
  successMessage: string = ''

  newUser = {
    name: '',
    email: ''
  }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  //get users
  getUsers() {
    this.errorMessage = ''
    this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          this.errorMessage = "Error loading Users!!!"
          return throwError(() => error)
        })
      )
      .subscribe(data => {
        this.users = data
      });
  }

  //post
  addUser() {
    this.errorMessage = ''
    this.successMessage = ''

    this.http.post(this.apiUrl, this.newUser)
      .pipe(
        catchError(error => {
          this.errorMessage = "Error while adding Users!!!"
          return throwError(() => error)
        })
      )
      // .subscribe(response=>{
      //   this.successMessage="USer Added Successfully!!!"
      //   this.getUsers() //refresh list
      //   this.newUser={name:'',email:''}
      // });

      .subscribe(response => {
        const newUserWithId = {
          id: this.users.length + 1,
          ...this.newUser
        };

        this.users.push(newUserWithId);
        this.successMessage = "User Added Successfully!!!"
        this.newUser = { name: '', email: '' }
      });

  }




}

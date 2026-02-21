import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-rxjsapicomponentprojectexample',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './rxjsapicomponentprojectexample.html',
  styleUrls: ['./rxjsapicomponentprojectexample.css'],
})
export class Rxjsapicomponentprojectexample implements OnInit{

  users: UserModel[] = [];
  user: UserModel = { name: '', email: '' };
  message = '';
  isEdit = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => this.message = err.message
    });
  }

  submitForm() {

    if (this.isEdit && this.user.id) {

      // Update locally only (avoid JSONPlaceholder 500 error)
      const index = this.users.findIndex(u => u.id === this.user.id);

      if (index !== -1) {
        this.users[index] = { ...this.user };
      }

      this.message = "User Updated Successfully!";
      this.resetForm();

    } else {

      this.userService.addUser(this.user)
        .subscribe((newUser) => {

          newUser.id = Math.max(...this.users.map(u => u.id || 0)) + 1;

          this.users.unshift(newUser);

          this.message = "User Added Successfully!";
          this.resetForm();
        });
    }
  }

  editUser(user: UserModel) {
    this.user = { ...user };
    this.isEdit = true;
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(() => {

        this.users = this.users.filter(u => u.id !== id);

        this.message = "User Deleted Successfully!";
      });
  }

  resetForm() {
    this.user = { name: '', email: '' };
    this.isEdit = false;
  }
}

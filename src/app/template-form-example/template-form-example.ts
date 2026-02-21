import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-template-form-example',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form-example.html',
  styleUrl: './template-form-example.css',
})
export class TemplateFormExample {

  employee = {
    name: '',
    email: '',
    department: '',
    salary: null
  };

  departments = ['HR', 'IT', 'Finance', 'Marketing'];

  onSubmit(form: any) {
    console.log('Form Data:', this.employee);
    alert('Employee Registered Successfully!');
    form.reset();
  }

}

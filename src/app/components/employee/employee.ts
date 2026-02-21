import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee, EmployeeService } from '../../services/employee';


@Component({
  selector: 'app-employee',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css'],
})
export class EmployeeComponent implements OnInit{

   employees: Employee[] = [];

  newEmployee: Employee = {
    name: '',
    email: '',
    department: ''
  };

  isEdit = false;

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.empService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  saveEmployee() {
    if (this.isEdit) {
      this.empService.updateEmployee(this.newEmployee).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    } else {
      this.empService.addEmployee(this.newEmployee).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    }
  }

  editEmployee(emp: Employee) {
    this.newEmployee = { ...emp };
    this.isEdit = true;
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

  resetForm() {
    this.newEmployee = { name: '', email: '', department: '' };
    this.isEdit = false;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form-example.html',
  styleUrls: ['./reactive-form-example.css'],
})
export class ReactiveFormExample {
   userForm!: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatch });
  }

  // Custom Validator
  passwordMatch(control: AbstractControl) {
    const pass = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return pass === confirm ? null : { notMatch: true };
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      alert('User Registered Successfully!');
      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}

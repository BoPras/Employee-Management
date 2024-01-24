import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ready } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logoUrl: string = "../../assets/JJK.png"
  detailForm!: FormGroup;
  error: string ="";
  dummyUserData = [{
    email: 'user1@example.com', password: '12345678'
  }, {
    email: 'user2@example.com', password: '12345678'
  }
  ]

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.detailForm = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ])],
      rememberMe: [false]
    })
  }

  onSubmit() {
    this.login();
  }

  login() {
    const enteredEmail = this.detailForm.get('email')?.value;
    const enteredPassword = this.detailForm.get('password')?.value;

    const authenticationUser = this.dummyUserData.find(
      user => user.email === enteredEmail && user.password === enteredPassword
    )

    if (authenticationUser) {
      localStorage.setItem('token', '1234567890');
      setTimeout(() => {
        this.route.navigateByUrl('/home');
      }, 300)
      confirm('Login Successful')
    } else {
      // alert('Invalid username or password')
      this.error = 'Invalid username or password'

      setTimeout(() => {
        this.error = '';
      }, 2000);

      this.detailForm.reset();
      this.route.navigateByUrl('/auth/login')
    }
  }
}

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
  detailForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.detailForm = this.createForm();
  }

  createForm(){
    return this.formBuilder.group({
      email: ["",Validators.compose([Validators.required, Validators.email])],
      password: ["",Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ])],
      rememberMe: [false]
    })
  }

  onSubmit(){
    this.login();
  }
  
  login(){
    localStorage.setItem('token','1234567890');
    setTimeout(() => {
      this.route.navigateByUrl('/home');
    },300)
  }
}

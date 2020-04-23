import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { 


  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    credential:  new FormControl('', Validators.maxLength(20)),
    password: new FormControl('', Validators.maxLength(20))
  });

 

  login(){
    console.log(this.loginForm.value.credential);
    console.log(this.loginForm.value.password);
  }

  

}

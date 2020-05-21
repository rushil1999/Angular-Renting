import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  msg: string;

  constructor( private userService: UserService,
    private router: Router) { 


  }

  ngOnInit(): void {
    this.builgLoginForm();
  }

  builgLoginForm(){
    this.loginForm = new FormGroup({
      credentials:  new FormControl('', Validators.maxLength(20)),
      password: new FormControl('', Validators.maxLength(20))
    });
  }
  

 

  login(){
    let list = new Array<string>();
    
    list.push(this.loginForm.get('credentials').value);
    list.push(this.loginForm.get('password').value);
    console.log(this.loginForm.value);
    
    this.userService.login(list).subscribe( 
      data => {
        localStorage.setItem("username", data);
        console.log("Returned Username " + data);
        this.router.navigate(['/dashboard/products/all']);
      },
      error => { 
        this.msg = "Wrong password or Invalid credentials";
        console.log("Error Received from server: "+ error );
        this.loginForm.reset();
      });
  }

  

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formValidatorIsNumeric } from 'src/app/form-validators';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;

  signUpForm : FormGroup;

  message: string;

  constructor( private userService: UserService ) { }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm(){
    this.signUpForm = new FormGroup({
      fname: new FormControl('', [ Validators.required, Validators.maxLength(10)]),
      lname: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      emailaddr: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), formValidatorIsNumeric] ),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)])
    });
    //this.signUpForm.valueChanges.subscribe(data => {console.log("hey")});
    
  }  

  

  fetchDetails(){
    console.log(this.signUpForm.value);
    this.user = this.signUpForm.value;
    this.userService.addUser(this.user).subscribe( data => {
      this.message = data;
      if(this.message == "User added"){
        localStorage.setItem("username", this.user.username);
      }
    })
    
    

    //this.signUpForm.get('name').dirty;
    
  }


  


    
}



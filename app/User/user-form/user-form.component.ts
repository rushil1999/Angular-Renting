import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  user: User;
  userForm: FormGroup;

  
  constructor() { 
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      username: new FormControl(),
      emailaddr: new FormControl(),
      phone: new FormControl(),
      password: new FormControl() 
    })

  }

  

}

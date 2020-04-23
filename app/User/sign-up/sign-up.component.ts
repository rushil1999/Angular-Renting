import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; 
import { User } from '../user';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'], 
  providers: [ UserService ]
})
export class SignUpComponent implements OnInit {

  value: String;
  user: User;
  username: String;
  fname: String;
  lname: String;
  emailaddr: String;
  phone: String;
  password: String;

  msg: String;

  //Injecting user service 
  constructor( private service: UserService ) { 
    this.fname = "";
    this.lname = "";
    this.username = "";
    this.emailaddr = "";
    this.phone = "";
    this.password = "";
    this.msg = "";
  }

  ngOnInit(): void {
  }

  register(){
    console.log("Registering");
    this.user = new User(this.username, this.fname,this.lname, this.emailaddr, this.phone, this.password);
    this.service.addUser(this.user).subscribe( data => {console.log(data); this.msg = data});

  }

  validate(): boolean{
    return this.service.validate(new User(this.username, this.fname,
      this.lname, this.emailaddr, this.phone, this.password));
  }

  

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Observable, observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8080/addUser";

  //Injecting HttpClient dependency
  constructor(private http: HttpClient) { }

  addUser(user: User) : Observable<any>{
    console.log("At your service" );
    return this.http.post(this.url, user)
    
  }

  throwError(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  validate(user: User): boolean{
    if(user.fname.length > 20 || user.lname.length > 20 || user.username.length > 20 ||
      user.emailaddr.length > 50 || user.phone.length > 15 || user.password.length > 20){
        return true;
    }
    else if(user.fname == null || user.lname == null || user.username.length == null ||
      user.emailaddr.length == null || user.phone.length == null || user.password.length == null) {
        return true;
    }
    else if(user.fname == "" || user.lname == "" || user.username == "" ||
      user.emailaddr == "" || user.phone == "" || user.password == "") {
        return true;
    }
    else{
      return false;
    }
  }

}

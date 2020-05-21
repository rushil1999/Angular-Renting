import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url_add = "http://localhost:8080/addUser";
  url_login = "http://localhost:8080/loginUser";

  //Injecting HttpClient dependency
  constructor( private http: HttpClient ) { }

  addUser(user: User) : Observable<any>{
    console.log("At your service" );
    return this.http.post(this.url_add, user);
    
  }

  throwError(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  login( list: Array<string> ): Observable<any>{

    
    const headers = {
      params : {
        "value": list
      }
    } 

    return this.http.get<string>(this.url_login, headers)
                    .pipe(catchError(this.errorHandler));

  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}

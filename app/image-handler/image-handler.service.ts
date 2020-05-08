import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageHandlerService {

  uploadUrl: string = "http://localhost:8080/image/upload";

  constructor( private http: HttpClient ) { 

   }

   uploadImage(file: File): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    console.log("Into Service");
    return this.http.post(this.uploadUrl, formData);
   }
   
   
}
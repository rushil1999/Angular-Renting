import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product }from './product';
import { Observable } from 'rxjs';
import { ProductVisual } from './productVisual';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url_list: string;
  url_details : string;
  url_add : string;
  url_upload : string;
  url_update: string;
  products: Product[];

  //Shared content between product list , product detail and product updation
  product: Product

  constructor( private http: HttpClient ) {  
  }

  getProductList(category: String): Observable<any>{
    this.url_list = "http://localhost:8080/products";
    this.url_list = this.url_list + "/" + category;

    const headers = {
      headers: new HttpHeaders({
        "username": "rs2"
      })
    }

    console.log("About to fetch Product List");
    return this.http.get<Product[]>(this.url_list,headers);
  }

  getProductListWithImages(category: String, toggle: boolean): Observable<any>{
    this.url_list = "http://localhost:8080/productImgs";
    this.url_list = this.url_list + "/" + category;

    let currentUserName: string;
    if(toggle){
      currentUserName = localStorage.getItem("username");
    }
    else{
      currentUserName = "@"
    }

    const headers = {
      headers: new HttpHeaders({
        "username": currentUserName
      })
    }

    console.log("About to fetch Product List");
    return this.http.get<ProductVisual[]>(this.url_list,headers);
  }


  getProductDetailsWithImage(id: number): Observable<any>{
    this.url_details = "http://localhost:8080/productImg";
    this.url_details = this.url_details + "/" + id;
    console.log(this.url_details);
    //this.http.get<Product>(this.url_details).subscribe((data) => {console.log(data) })
    return this.http.get<ProductVisual>(this.url_details);
  }

  getProductDetails(id: number): Observable<any>{
    this.url_details = "http://localhost:8080/product";
    this.url_details = this.url_details + "/" + id;
    console.log(this.url_details);
    //this.http.get<Product>(this.url_details).subscribe((data) => {console.log(data) })
    return this.http.get<Product>(this.url_details);
  }


  //Sends only product to backend 
  addProduct(product: Product): Observable<any>{
    console.log("Service " + product.name);
    this.url_add = "http://localhost:8080/addProduct";
    const headers = {
      headers : new HttpHeaders({
        "token": localStorage.getItem("username")
      })
    }  
    console.log("About to fire post query on " + this.url_add);
    return this.http.post(this.url_add, product, headers);
  }


  updateProduct( product: Product ): Observable<any>{
    this.url_update = "http://localhost:8080/updateProduct";
    return this.http.put(this.url_update, product);
  }
  
}




// addNewProduct(files: Array<File>, product: Product): void{

//   this.addProduct(product).subscribe(data => { 
//     this.uploadImages(files, data).subscribe(data => {
//       this.displayImageUploadDataInConsole(data);
//     } )});

// }



// uploadImages(files: Array<File>, productId: number): Observable<any>{

//   this.url_upload = "http://localhost:8080/image/upload";
//   const formData: FormData = new FormData();
//   formData.append('file', JSON.stringify(files));
//   console.log("Into Image Service");

//   const headers = {
//     headers : new HttpHeaders({
//       "productId": String(productId)
//     })
//   } 
//   return this.http.post(this.url_upload, formData);
//  }
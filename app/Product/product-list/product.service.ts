import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product }from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url_list: string;
  url_details : string;
  products: Product[];

  constructor(private http: HttpClient) {  
    this.url_details = "";
  }

  getProductList(category: String){
    this.url_list = "http://localhost:8080/products";
    this.url_list = this.url_list + "/" + category;
    return this.http.get<Product[]>(this.url_list);
  }

  getProductDetails(id: number){
    this.url_details = "http://localhost:8080/product";
    this.url_details = this.url_details + "/" + id;
    console.log(this.url_details);
    return this.http.get<Product>(this.url_details);
  }
}

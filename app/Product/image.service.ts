import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductVisual } from './product-list/productVisual';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor( private http: HttpClient ) { }

  url_imageUpload: string = "http://localhost:8080/image/upload";
  url_imageList: string = "http://localhost:8080/image";


  uploadLoadImage(file: File, productId: number): Observable<any>{


    let formData = new FormData();
    formData.append('file', file);

    const headers = {
      headers : new HttpHeaders({
        "productId": String(productId)
      })  
    }
    
    return this.http.post(this.url_imageUpload, formData, headers);
    
  }


  // getImageListForProducts(list: Array<Product>): Array<ProductVisual>{
    
  //   let i: number;
  //   let url: string ;
    
  //   let productImages: Array<ProductVisual>;

  //   for(i=0;i<list.length;i++){
      
  //     url = this.url_imageList + "/"+list[i].id
  //     this.http.get<string>(url).subscribe(data => { 
  //       list[i] = this?.assignImageToProduct(list[i], data)
        
  //     });
  //   }
  //   return productImages;
    
  // }


  assignImageToProduct(product: Product, data: string): Product{
    product.image = "images/1.png";
    return product;
  }

}

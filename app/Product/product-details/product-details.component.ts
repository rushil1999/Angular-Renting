import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  productId: number;
  curUrl: String;
  arr: String[];
  constructor(private route: Router, private prodService: ProductService) {

  }


  ngOnInit(): void {
    this.curUrl = this.route.url;
    console.log(this.curUrl);
    this.arr = this.curUrl.split("/",5);
    this.productId = Number(this.arr[3]);
    console.log(this.productId);
    this.getProductDetails();
  }

  getProductDetails(): void{
    this.prodService.getProductDetails(this.productId).subscribe(data => {this.product = data});
  }

}


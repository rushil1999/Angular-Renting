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
  currentUrl: String;
  arr: String[];
  constructor(private route: Router, private prodService: ProductService) {

  }


  ngOnInit(): void {
    this.currentUrl = this.route.url;
    this.arr = this.currentUrl.split("/",5);
    this.productId = Number(this.arr[3]);
    console.log(this.productId);

    this.prodService.getProductDetails(this.productId).subscribe(data => {this.product = data});

  }

}


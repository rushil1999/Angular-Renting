import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

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
  constructor(private route: Router) {}


  ngOnInit(): void {
    this.currentUrl = this.route.url;
    this.arr = this.currentUrl.split("/",5);
    this.productId = Number(this.arr[3]);
    console.log(this.productId);

  }

}


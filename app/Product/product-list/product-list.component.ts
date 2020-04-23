import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  category: String;
  products: Product[];
  url: String;

  constructor( private prodService: ProductService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.category = "all";
    this.getProductList();
  }


  getProductList(): void {
    this.prodService.getProductList(this.category).subscribe(data => { this.products = data});
    //console.log(this.products);
  }

  productView(id: number){
    
    this.url = "/dashboard/product/" + String(id);
    this.router.navigate([this.url]);
  }

}

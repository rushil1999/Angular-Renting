import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';
import { ProductVisual } from './productVisual';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  @Input() category: String;

  productImages: Array<ProductVisual>

  products: Array<Product>;

  images: Array<String>;

  cUrl: string;
  arr: String[];

  constructor( private prodService: ProductService, 
    private router: Router, 
    private imageService : ImageService) { 
    this.category = "all";
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("Change Detected " + changes.category.currentValue);
    // this.arr = this.router.url.split("/",5);
    // this.category = this.arr[3];
    this.getProductList();

  }

  ngOnInit(): void {
    console.log("Product List");
    //console.log(this.router.url);
    // console.log(this.router.url.split("/",5));
    // this.arr = this.router.url.split("/",5);
    // this.category = this.arr[3];
    this.getProductList();
  }

  

  getProductList(): void {
    this.prodService.getProductList(this.category).subscribe(data => { this.products = data});
    //this.productImages = this.imageService.getImageListForProducts(this?.products);

    //console.log(this.products);
  }


  cumulateData(): void{
    let i: number;
    for(i=0;i<this.products.length;i++){
      this.productImages.push( new ProductVisual(this.products[i], this.images[i]));
    }
  }

  goToDetailsPage(product: Product){

    this.prodService.product = product;
    
    this.router.navigate(['/dashboard/product',product.id]);

  }

  // productView(id: number){
    
  //   this.cUrl = "/dashboard/product/" + String(id);
  //   this.router.navigate([this.cUrl]);
  // }

}

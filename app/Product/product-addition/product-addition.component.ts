import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-addition',
  templateUrl: './product-addition.component.html',
  styleUrls: ['./product-addition.component.css']
})
export class ProductAdditionComponent implements OnInit {

  product: Product;
  constructor( private productService : ProductService ) { }

  ngOnInit(): void {
  }

  productAdditionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required), 
    category: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    doa: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  })


  addProduct(): void{
    console.log(this.productAdditionForm.value);
    this.product = this.productAdditionForm.value;
    console.log(this.product.name);
    this.product.id=1;
    this.productService.addProduct(this.product).subscribe(
      data => {this.displayData(data)});

  }

  displayData(data: any){
    console.log(data);
  }
}




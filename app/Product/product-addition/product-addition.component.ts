import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-product-addition',
  templateUrl: './product-addition.component.html',
  styleUrls: ['./product-addition.component.css']
})
export class ProductAdditionComponent implements OnInit {

  msg: string;

  product: Product;
  
  file: File;

  selector: number;
  constructor( 
    private productService : ProductService,
    private imageService: ImageService
       ) { 
    
  }

  ngOnInit(): void {
    //Start with product details form filling
    this.selector = 1;
  }

  //Product-addition-form event collector
  getProductDetailsFromChild( productAdditionForm: FormGroup ){
    //console.log("Product Received by parent");
    this.product = productAdditionForm.value;
    //console.log("Parent " + this.product.age);
    this.product.id=1;

    //Redirecting to Image Handler
    this.selector = 2;

  }

  getImageFilesFromChild(file: File){
    console.log("Image file received by parent");
    this.file = file;
  }

  imageChildEventHandler(select: number){
    this.selector = select;
  }

  uploadProduct(temp: any){
    if(this.product != null && this.file && temp == true){
      this.productService.addProduct(this.product).subscribe(data => {
        this.uploadImage(this.file, Number(data))
      });
    }
    else{
      console.log("Product Addition incomplete");
    }
  }
  uploadImage(file: File, productId: number){

    this.imageService.uploadLoadImage(file, productId).subscribe(data => { this.setDisplayMessage(data)});

  }

  setDisplayMessage(data: any){
    window.alert(data);
  }
  
}




// productAdditionForm = new FormGroup({
//   name: new FormControl('', [ Validators.maxLength(20), Validators.required]),
//   age: new FormControl('', [Validators.required]),
//   desc: new FormControl('', [Validators.maxLength(50), Validators.required]), 
//   category: new FormControl('', Validators.required),
//   duration: new FormControl('', Validators.required),
//   doa: new FormControl('', Validators.required),
//   price: new FormControl('', Validators.required)
// })


// addProduct(): void{
//   console.log(this.productAdditionForm.value);
//   this.product = this.productAdditionForm.value;
//   console.log(this.product.name);
//   this.product.id=1;
//   this.productService.addProduct(this.product).subscribe(
//     data => {this.displayDataInConsole(data)});

// }

// displayDataInConsole(data: any){
//   console.log(data);
// }


//Image-handler event collector
  // getImageFiles( files: Array<File>){
  //   this.imageFiles = files;
  //   console.log("received by parent");
  //   this.uploadProductDetails();

  // }
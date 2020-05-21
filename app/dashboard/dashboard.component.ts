import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Selecttion Attributes
  currentUrl: String;
  arr: String[];
  selector: number;

  //User session Attributes
  toggle: boolean;
  currentUser: string;

  //Child Data Requirements attributes
  category: String;
  id: number;

  navigationSubscription: any;

  constructor(private route: Router) {
    this.selector = 0;
    this.navigationSubscription = this.route.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.selectDashboard();
      }
    });


   }

  ngOnInit(): void {
    console.log("Initialized dashboard");
    this.currentUser = localStorage.getItem("username");
  }


  selectDashboard(): void{
    this.currentUrl = this.route.url;
    this.arr = this.currentUrl.split("/",5);



    if(this.arr[2] == "products"){
      //List
      
      console.log("DashBoard Selector: " + this.selector + " Catgory: " + this.arr[3]);
      this.category = this.arr[3];
      if(this.arr[4] == "u"){
        this.toggle = true;
      }
      else{
        this.toggle = false;
      }
      this.selector = 1;
    }
    else if(this.arr[2] == "product"){
      //Details
      console.log("Dashboard Selector: " + this.selector);
      this.id = Number(this.arr[3]);
      this.selector = 2;
    }

    else if(this.arr[2] == "addProduct"){
      //Add Product
      this.selector = 3;
      console.log("Dashboard Selector: " + this.selector);
    }

    else if(this.arr[2] == "updateProduct"){
      //Update Product
      console.log("Dashboard Selector: " + this.selector);
      this.id = Number(this.arr[3]);
      this.selector = 4;
    }
  }




  goToAddProduct(): void{
    if(localStorage.getItem("username") != null){
      this.route.navigate(["/dashboard/addProduct"]);
    }
    else{
      this.route.navigate(["/login"]);
    }  
  }

  goToListByCategory( num : any ): void{
    console.log("Function called");

    let url: string;
    if(num == 1){
      //this.selector = 2;
      this.route.navigate(['/dashboard/products/', 'all']);
    }
    else if(num == 2){
      
      this.route.navigate(['/dashboard/products/', 'Clothes']);
    }
    else if(num == 3){
      
      this.route.navigate(['/dashboard/products/', 'Electronics']);
    }
    else if(num == 4){
      
      this.route.navigate(['/dashboard/products/', 'Household']);
    }
    else if(num == 5){
      
      this.route.navigate(['/dashboard/products/', 'Games']);
    }
    else if(num == 6){
      
      this.route.navigate(['/dashboard/products/', 'Industrial']);
    }
    else if(num == 7){
      
      this.route.navigate(['/dashboard/products/', 'Other']);
    }
    
  }



  displayToggle(value: any){
    console.log("Toogled: value = " + !this.toggle);

    let url: string;
    if(!this.toggle){
      url = "/dashboard/products/" + this.category + "/u";
      this.route.navigate([url]);
    }
    else{
      url = "/dashboard/products/" + this.category;
      this.route.navigate([url]);
    }
  }

  logOut(){
    //console.log("Rempving User name");
    localStorage.removeItem("username");
    //Should be changed to home page...
    this.route.navigate(["dashboard/products/all"]);
  }



}



  // updateProductListByCategory(category: String){
  //   this.currentUrl = "/dashboard/products/" + category;
  //   this.route.navigate([this.currentUrl]);
  // }
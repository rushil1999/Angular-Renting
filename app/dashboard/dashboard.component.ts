import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUrl: String;
  arr: String[];
  selector: number;

  constructor(private route: Router) {
    this.selector = 0;
   }

  ngOnInit(): void {
    //console.log("Rushil Shah");
    this.currentUrl = this.route.url;
    this.arr = this.currentUrl.split("/",5);
    if(this.arr[2] == "products"){
      this.selector = 1;
      console.log("DashBoard Selector:" + this.selector);
    }
    else if(this.arr[2] == "product"){
      this.selector = 2;
      console.log("Dashboard Selector: " + this.selector);
    }
    
    //console.log(this.route.url);
  }

}

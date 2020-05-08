import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { LoginComponent } from './User/login/login.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { UserService } from './User/user.service';
import { ProductService } from './Product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { UserFormComponent } from './User/user-form/user-form.component';
import { SignupComponent } from './User/signup/signup.component';
import { ImageHandlerComponent } from './image-handler/image-handler.component';
import { ProductAdditionComponent } from './Product/product-addition/product-addition.component';



@NgModule({
  declarations: [
    AppComponent, 
    SignUpComponent, 
    LoginComponent, 
    ProductListComponent, 
    DashboardComponent, 
    ProductDetailsComponent, 
    UserFormComponent, 
    SignupComponent, ImageHandlerComponent, ProductAdditionComponent
    

  ],
  imports: [
    CommonModule, 
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent},
      { path: 'signUp', component: SignupComponent}, 
      { path: 'login', component: LoginComponent }, 
      { path: 'dashboard/products/:category', component: DashboardComponent, runGuardsAndResolvers: 'always'},
      { path: 'dashboard/product/:id', component: DashboardComponent, runGuardsAndResolvers: 'always'},
      { path: 'dashboard/addProduct', component: DashboardComponent, runGuardsAndResolvers: 'always'},
      { path: 'user', component: UserFormComponent},
      { path: 'image', component: ImageHandlerComponent } 
    ],
    { onSameUrlNavigation: 'reload' },
    )],
  bootstrap: [ AppComponent ], 
  
  providers : [
    UserService, 
    ProductService
  ]
})
export class AppModule { }

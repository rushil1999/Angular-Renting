import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { UserService } from './User/user.service';
import { ProductService } from './Product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { ImageHandlerComponent } from './image-handler/image-handler.component';
import { ProductAdditionComponent } from './Product/product-addition/product-addition.component';
import { ProductAdditionFormComponent } from './Product/product-addition-form/product-addition-form.component';
import { ProductUpdationComponent } from './Product/product-updation/product-updation.component';
import { ProductUpdationFormComponent } from './Product/product-updation-form/product-updation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { ProductAdditionImageComponent } from './Product/product-addition-image/product-addition-image.component';
import { SignUpComponent } from './User/sign-up/sign-up.component'



@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    ProductListComponent, 
    DashboardComponent, 
    ProductDetailsComponent, 
    ImageHandlerComponent, 
    ProductAdditionComponent, 
    ProductAdditionFormComponent, 
    ProductUpdationComponent, 
    ProductUpdationFormComponent, 
    ProductAdditionImageComponent, SignUpComponent
    

  ],
  imports: [
    CommonModule, 
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent},
      { path: 'signUp', component: SignUpComponent},
      { path: 'login', component: LoginComponent }, 
      { path: 'dashboard/products/:category', component: DashboardComponent, runGuardsAndResolvers: 'always'},
      { path: 'dashboard/products/:category/u', component: DashboardComponent, runGuardsAndResolvers: 'always'},
      { path: 'dashboard/product/:id', component: DashboardComponent, runGuardsAndResolvers: 'always'},
      { path: 'dashboard/addProduct', component: DashboardComponent, runGuardsAndResolvers: 'always' },
      { path: 'dashboard/updateProduct/:id', component: DashboardComponent, runGuardsAndResolvers: 'always' },
      { path: 'image', component: ImageHandlerComponent } 
    ],
    { onSameUrlNavigation: 'reload' },
    ),
    BrowserAnimationsModule],
  bootstrap: [ AppComponent ], 
  
  providers : [
    UserService, 
    ProductService
  ]
})
export class AppModule { }

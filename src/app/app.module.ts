import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNaviationComponent } from './HomeWeb/home-naviation/home-naviation.component';
import { HomeComponent } from './HomeWeb/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthService } from './services/auth.service';
import { CustomerService } from './services/customer.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { SearchProductService } from './services/search-product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { LoginComponent } from './HomeWeb/login/login.component';
// import { RegisterComponent } from './HomeWeb/register/register.component';
import { ResetCredentialsComponent } from './HomeWeb/reset-credentials/reset-credentials.component';
import { ProductsComponent } from './HomeWeb/products/products.component';
import { ProductViewComponent } from './HomeWeb/product-view/product-view.component';
import { ShoppingCartComponent } from './HomeWeb/shopping-cart/shopping-cart.component';
import { ReceptionistModule } from './receptionist/receptionist-products/receptionist.module';
import { OrdersComponent } from './HomeWeb/orders/orders.component';
import { CustomerOrdersComponent } from './common/customer-orders/customer-orders.component';
import { OrderDetailsComponent } from './common/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNaviationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ResetCredentialsComponent,
    ProductsComponent,
    ProductViewComponent,
    ShoppingCartComponent,
    OrdersComponent,
    CustomerOrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReceptionistModule

  ],
  providers: [AuthGuardService,AuthInterceptorService,AuthService,CustomerService,OrderService,ProductService,SearchProductService,
  ShoppingCartService, {provide:HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

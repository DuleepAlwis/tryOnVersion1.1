import { BrowserModule } from '@angular/platform-browser';
import { NgModule,VERSION } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
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
//import { LoginComponent } from './auth/login/login.component';
//import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './HomeWeb/login/login.component';
import { RegisterComponent } from './HomeWeb/register/register.component';
import { ResetCredentialsComponent } from './HomeWeb/reset-credentials/reset-credentials.component';
import { ProductsComponent } from './HomeWeb/products/products.component';
import { ProductViewComponent } from './HomeWeb/product-view/product-view.component';
import { ReceptionistModule } from './receptionist/receptionist-products/receptionist.module';
import { OrdersComponent } from './HomeWeb/orders/orders.component';
import { CustomerOrdersComponent } from './common/customer-orders/customer-orders.component';
import { OrderDetailsComponent } from './common/order-details/order-details.component';

import { MenMeasurementsComponent } from './men-top-measurements/men-top-measurements.component';
import { MenBottomMeasurementsComponent } from './men-bottom-measurements/men-bottom-measurements.component';
import { CustomerModule } from './HomeWeb/customer/customer.module';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { HomeNavigationComponent } from './navigations/home-navigation/home-navigation.component';
import { MenProductsComponent } from './HomeWeb/men-products/men-products.component';
import { AccessoriesProductsComponent } from './HomeWeb/accessories-products/accessories-products.component';
import { CustomerNavigationComponent } from './navigations/customer-navigation/customer-navigation.component';
import { CustomerProfileComponent } from './HomeWeb/customer-profile/customer-profile.component';
import { CustomerSearchProductComponent } from './HomeWeb/customer-search-product/customer-search-product.component';
import { ShoppingCartComponent } from './HomeWeb/shopping-cart/shopping-cart.component';
import { BottumMeasurementComponent } from './HomeWeb/bottum-measurement/bottum-measurement.component';
import { BottumMeasurementDetailsComponent } from './HomeWeb/bottum-measurement-details/bottum-measurement-details.component';
import { TopMeasurementDetailsComponent } from './HomeWeb/top-measurement-details/top-measurement-details.component';
import { CustomerMeasurementComponent } from './HomeWeb/customer-measurement/customer-measurement.component';
import { BillingPaymentComponent } from './HomeWeb/billing-payment/billing-payment.component';
//import { ReceptionistMainComponent } from './receptionist/receptionist-main/receptionist-main.component';
import { ReceptionistNavComponent } from './receptionist/receptionist-nav/receptionist-nav.component';
import { ReceptionistSidebarComponent } from './receptionist/receptionist-sidebar/receptionist-sidebar.component';
import { ReceptionistFooterComponent } from './receptionist/receptionist-footer/receptionist-footer.component';
import { CustomerViewOrdersComponent } from './HomeWeb/customer-view-orders/customer-view-orders.component';
import { CustomerOrderViewComponent } from './HomeWeb/customer-order-view/customer-order-view.component';
import { CustomerSupportComponent } from './HomeWeb/customer-support/customer-support.component';
import { RatingModule } from 'ng-starrating';
import { CustomerSupportService } from './services/customer-support.service';
import { ViewCustomerOrdersComponent } from './receptionist/view-customer-orders/view-customer-orders.component';
import { ViewOrderComponent } from './receptionist/view-order/view-order.component';
import { FooterAreaComponent } from './HomeWeb/footer-area/footer-area.component';
const configSocket: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);

export function provideConfig() {
  return config;
}

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
    OrdersComponent,
    CustomerOrdersComponent,
    OrderDetailsComponent,
    MenMeasurementsComponent,
    MenBottomMeasurementsComponent,
    HomeNavigationComponent,
    MenProductsComponent,
    AccessoriesProductsComponent,
    CustomerNavigationComponent,
    CustomerProfileComponent,
    CustomerSearchProductComponent,
    ShoppingCartComponent,
    BottumMeasurementComponent,
    BottumMeasurementDetailsComponent,
    TopMeasurementDetailsComponent,
    CustomerMeasurementComponent,
    BillingPaymentComponent,
  //  ReceptionistMainComponent,
    ReceptionistNavComponent,
    ReceptionistSidebarComponent,
    ReceptionistFooterComponent,
    CustomerViewOrdersComponent,
    CustomerOrderViewComponent,
    CustomerSupportComponent,
    FooterAreaComponent
   

  ],
  imports: [
BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReceptionistModule,
    //CustomerModule,
    SocialLoginModule,
    SocketIoModule.forRoot(configSocket),
    RatingModule 

  ],
  providers: [AuthGuardService,AuthInterceptorService,AuthService,CustomerService,OrderService,ProductService,SearchProductService,
  ShoppingCartService, CustomerSupportService,{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  },{provide:HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

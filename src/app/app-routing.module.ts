import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './HomeWeb/home/home.component';
//import { LoginComponent } from './auth/login/login.component';
//import { RegisterComponent } from './auth/register/register.component';


import { LoginComponent } from './HomeWeb/login/login.component';
import { RegisterComponent } from './HomeWeb/register/register.component';
import { ProductsComponent } from './HomeWeb/products/products.component';
import { ProductViewComponent } from './HomeWeb/product-view/product-view.component';
import { ShoppingCartComponent } from './HomeWeb/shopping-cart/shopping-cart.component';
import { AuthGuardService } from './services/auth-guard.service';
import { OrderDetailsComponent } from './common/order-details/order-details.component';
import { CustomerOrdersComponent } from './common/customer-orders/customer-orders.component';


import { MenMeasurementsComponent } from './men-top-measurements/men-top-measurements.component';
import { MenBottomMeasurementsComponent } from './men-bottom-measurements/men-bottom-measurements.component';

import { ResetCredentialsComponent } from './HomeWeb/reset-credentials/reset-credentials.component';
import { MenProductsComponent } from './HomeWeb/men-products/men-products.component';
import { AccessoriesProductsComponent } from './HomeWeb/accessories-products/accessories-products.component';
import { CustomerProfileComponent } from './HomeWeb/customer-profile/customer-profile.component';
import { CustomerSearchProductComponent } from './HomeWeb/customer-search-product/customer-search-product.component';
import { BottumMeasurementDetailsComponent } from './HomeWeb/bottum-measurement-details/bottum-measurement-details.component';
import { TopMeasurementDetailsComponent } from './HomeWeb/top-measurement-details/top-measurement-details.component';
import { CustomerMeasurementComponent } from './HomeWeb/customer-measurement/customer-measurement.component';
import { BillingPaymentComponent } from './HomeWeb/billing-payment/billing-payment.component';
import { ReceptionistMainComponent } from './receptionist/receptionist-main/receptionist-main.component';
import { CustomerViewOrdersComponent } from './HomeWeb/customer-view-orders/customer-view-orders.component';
import { CustomerOrderViewComponent } from './HomeWeb/customer-order-view/customer-order-view.component';
import { CustomerSupportComponent } from './HomeWeb/customer-support/customer-support.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'measurements',component:MenMeasurementsComponent},
  {path:'measurements1',component:MenBottomMeasurementsComponent},
  {component: ProductsComponent, path: "Products"},
  {component: ProductViewComponent,path: "productview/:category/:id"},
  {
    component: ShoppingCartComponent,
    path: "shoppingcart/:category",
    canActivate: [AuthGuardService]
  },
  {
    component : CustomerOrdersComponent,
    path : "Orderdetails",
    canActivate: [AuthGuardService]
  },
  /*{
    component : OrderDetailsComponent,
    path : "OrderCustomer/:orderId",
    canActivate : [AuthGuardService]
  },*/
  {
    component : CustomerOrdersComponent,
    path : "Receptionist/Orderdetails",
    canActivate: [AuthGuardService]
  },
  {
    component : OrderDetailsComponent,
    path : "Receptionist/OrderCustomer/:orderId",
    canActivate : [AuthGuardService]
  },
  {
    component : ResetCredentialsComponent,
    path : "ResetCredentials",
    canActivate : [AuthGuardService]
  },
  {
    component : MenProductsComponent,
    path : "productsMen"
  },
  {
    component : AccessoriesProductsComponent,
    path : "productsAccessories"
  },

  {
    //component:ProductsComponent,
    component:MenProductsComponent,
    path:"Customer",
    canActivate:[AuthGuardService]
  },
        {
          component: CustomerProfileComponent,
          path: "CustomerProfile",
          canActivate: [AuthGuardService]
        },
         {
          component: ResetCredentialsComponent,
          path: "ResetCredentials",
          canActivate: [AuthGuardService]
        },
        {
          component:CustomerSearchProductComponent,
          path: 'CustomerSearchProduct',
          canActivate: [AuthGuardService]
        },
        {
          component:BottumMeasurementDetailsComponent,
          path:'CustomerBottumMeasurement',
          canActivate:[AuthGuardService]
        },
        {
          component:TopMeasurementDetailsComponent,
          path:'CustomerTopMeasurement',
          canActivate:[AuthGuardService]
        },
        {
          component:CustomerSupportComponent,
          path:'CustomerSupport'
        },
    /*{
      component : OrdersComponent,
      path : "Orderdetails",
      canActivate: [AuthGuard]
    },
    {
      component : OrderCustomerComponent,
      path : "OrderCustomer/:orderId",
      canActivate : [AuthGuard]
    }*/

    {
      component: ShoppingCartComponent,
      path: "shoppingcart/:category",
      canActivate: [AuthGuardService]
    },
    {
      component: CustomerMeasurementComponent,
      path: "customerMeasurement",
      canActivate: [AuthGuardService]
    },
    {
      component:BillingPaymentComponent,
      path:'checkout',
      canActivate:[AuthGuardService]
    },
    {
      component : CustomerViewOrdersComponent,
      path : "CustomerOrdersView",
      canActivate: [AuthGuardService]
    },
    {
      component : CustomerOrderViewComponent,
      path : "OrderCustomer/:orderId",
      canActivate: [AuthGuardService]
    }
   /* {
      component:ReceptionistMainComponent,
      path:'receptionistMain'
    }*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers:[AuthGuardService]
})
export class AppRoutingModule { }

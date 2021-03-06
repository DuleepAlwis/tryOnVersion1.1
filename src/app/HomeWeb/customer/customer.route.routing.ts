import { Routes, RouterModule } from '@angular/router';
import { CustomerNavigationComponent } from '../customer-navigation/customer-navigation.component';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
import { ResetCredentialsComponent } from '../reset-credentials/reset-credentials.component';
import { CustomerSearchProductComponent } from '../customer-search-product/customer-search-product.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { AuthGuardService } from './../../services/auth-guard.service';
import { NgModule } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { BottumMeasurementComponent } from '../bottum-measurement/bottum-measurement.component';
import { BottumMeasurementDetailsComponent } from '../bottum-measurement-details/bottum-measurement-details.component';
import { TopMeasurementDetailsComponent } from '../top-measurement-details/top-measurement-details.component';
import { MenProductsComponent } from '../men-products/men-products.component';

const customerRoutes: Routes = [
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
  }
]

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
exports: [RouterModule],
  providers: [AuthGuardService]
})
export class CustomerRoutesModule {}

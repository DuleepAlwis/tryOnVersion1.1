import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './HomeWeb/home/home.component';
import { LoginComponent } from './HomeWeb/login/login.component';
import { RegisterComponent } from './HomeWeb/register/register.component';
import { ProductsComponent } from './HomeWeb/products/products.component';
import { ProductViewComponent } from './HomeWeb/product-view/product-view.component';
import { ShoppingCartComponent } from './HomeWeb/shopping-cart/shopping-cart.component';
import { AuthGuardService } from './services/auth-guard.service';
import { OrderDetailsComponent } from './common/order-details/order-details.component';
import { CustomerOrdersComponent } from './common/customer-orders/customer-orders.component';
import { ResetCredentialsComponent } from './HomeWeb/reset-credentials/reset-credentials.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
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
  {
    component : OrderDetailsComponent,
    path : "OrderCustomer/:orderId",
    canActivate : [AuthGuardService]
  },
  {
    component : ResetCredentialsComponent,
    path : "ResetCredentials",
    canActivate : [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers:[AuthGuardService]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptionistProductsComponent } from './receptionist-products.component';
import { MenSuitsFormComponent } from '../men-suits-form/men-suits-form.component';
import { TightsFormComponent } from '../tights-form/tights-form.component';
import { AccessoriesFormComponent } from '../accessories-form/accessories-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ReceprionistProductsEditComponent } from '../receprionist-products-edit/receprionist-products-edit.component';
import { ClothEditComponent } from '../cloth-edit/cloth-edit.component';
import { ReceptionistMainComponent } from '../receptionist-main/receptionist-main.component';
import { ViewCustomerOrdersComponent } from '../view-customer-orders/view-customer-orders.component';
import { ViewOrderComponent } from '../view-order/view-order.component';
import { ReceptionistDashboardComponent } from '../receptionist-dashboard/receptionist-dashboard.component';

const productsAddRoutes: Routes = [
  {
    component: ReceptionistMainComponent,
    path: "Receptionist",
    children: [
      {
        component: MenSuitsFormComponent,
        path: "suitform/:title" /*,
        outlet: "addProducts"*/
      },
      {
        path: "tightsform/:title",
        component: TightsFormComponent /*,
        outlet: "addProducts"*/
      },
      {
        component: AccessoriesFormComponent,
        path: "accessoriesform/:title" /*,
        outlet: "addProducts"*/
      },
      {
        component: ReceprionistProductsEditComponent,
        path: "Receptionistproductedit"
      },
      {
        component: ClothEditComponent,
        path: "ClothEdit/:productId/:type/:category"
      },
      {
        component: ViewCustomerOrdersComponent,
        path: "CustomerOrdersView"
      },
      {
        component: ViewOrderComponent,
        path : "ViewOrder/:orderId",
      },
      {
        component: ReceptionistDashboardComponent,
        path : "receptionistdashboard",
      }
    ]
  }


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(productsAddRoutes)],
  exports: [RouterModule]
})
export class ReceptionistRouteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TightsFormComponent } from '../tights-form/tights-form.component';
import { ReceptionistProductsComponent } from './receptionist-products.component';
import { MenSuitsFormComponent } from '../men-suits-form/men-suits-form.component';
import { AccessoriesFormComponent } from '../accessories-form/accessories-form.component';
import { ReceptionistNavigationComponent } from '../receptionist-navigation/receptionist-navigation.component';
import { ReceprionistProductsEditComponent } from '../receprionist-products-edit/receprionist-products-edit.component';
import { ClothEditComponent } from '../cloth-edit/cloth-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReceptionistRouteModule } from './receptionist-route.module';
import { ReceptionistMainComponent } from '../receptionist-main/receptionist-main.component';
import { ViewCustomerOrdersComponent } from '../view-customer-orders/view-customer-orders.component';
import { ViewOrderComponent } from '../view-order/view-order.component';
import { ReceptionistDashboardComponent } from '../receptionist-dashboard/receptionist-dashboard.component';

@NgModule({
  declarations: [ TightsFormComponent,
    ReceptionistProductsComponent,
    MenSuitsFormComponent,
    AccessoriesFormComponent,
    ReceptionistNavigationComponent,
    ReceprionistProductsEditComponent,
    ClothEditComponent,
    ReceptionistMainComponent,
    ViewCustomerOrdersComponent,
    ViewOrderComponent,
ReceptionistDashboardComponent
  ],
  imports: [CommonModule, ReceptionistRouteModule, ReactiveFormsModule, FormsModule]
})
export class ReceptionistModule { }

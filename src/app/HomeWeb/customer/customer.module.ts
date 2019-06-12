import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerNavigationComponent } from '../customer-navigation/customer-navigation.component';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
import { CustomerSearchProductComponent } from '../customer-search-product/customer-search-product.component';
import { CustomerRoutesModule } from './customer.route.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { BottumMeasurementComponent } from '../bottum-measurement/bottum-measurement.component';
import { BottumMeasurementDetailsComponent } from '../bottum-measurement-details/bottum-measurement-details.component';
import { TopMeasurementDetailsComponent } from '../top-measurement-details/top-measurement-details.component';

@NgModule({
  declarations: [
    CustomerNavigationComponent,
    CustomerProfileComponent,
    CustomerSearchProductComponent,
    ShoppingCartComponent,
    BottumMeasurementComponent,
    BottumMeasurementDetailsComponent,
    TopMeasurementDetailsComponent

  ],
  imports: [
CommonModule,
    CustomerRoutesModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }

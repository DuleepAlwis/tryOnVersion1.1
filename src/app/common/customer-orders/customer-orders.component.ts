import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/modules/Orders';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {

  orders: Array<Orders>;
  message: string = " ";
  isLoading = true;
  constructor(private authService: AuthService, private orderService: OrderService) { }

  ngOnInit() {
    if(this.authService.getRole()=="C")
    {
      this.orderService.getAllCustomerOrders(this.authService.getUserId()).subscribe(responseData => {
        if(responseData.message===0) {
          this.message = "No orders";
        }
        else {
         // console.log(responseData.result);
          this.orders = responseData.result;
          //console.log(this.orders);
          this.isLoading = false;
        }
      });
    }

    if(this.authService.getRole()=="R")
    {
      this.orderService.getAllOrders().subscribe(responseData => {
        if(responseData.message===0) {
          this.message = "No orders";
        }
        else {
         // console.log(responseData.result);
          this.orders = responseData.result;
          //console.log(this.orders);
          this.isLoading = false;

        }
      });
    }

  }

  getRole()
  {
    return this.authService.getRole();
  }


}

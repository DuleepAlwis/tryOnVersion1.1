import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/modules/Orders';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-view-customer-orders',
  templateUrl: './view-customer-orders.component.html',
  styleUrls: ['./view-customer-orders.component.scss']
})
export class ViewCustomerOrdersComponent implements OnInit {

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

  removeOrder(i:string)
  {
    console.log(this.orders);
    let orderId = this.orders[i];
    this.orderService.removeOrderCustomer(orderId).subscribe(responseData=>{
      if(responseData.message==0)
      {
        alert("Order removed Success");
      }
      else 
      {
        alert("Something wrong,Order didn't remove");
      }
    });

  }


}

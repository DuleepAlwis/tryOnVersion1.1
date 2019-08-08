import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from 'src/app/modules/Orders';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  orderId: string;
  message:string;
  address:string;
  city:string;
  district:string;
  mobilenumber:string;
  orderedDate:string;
  dueDate:string;
  time:string;
  totalPrice:string;
  status:string
  comment:string;
  orderedItems:Array<Object>;
  display = true;
  deliveryDate = "";
  form = new FormGroup({
    reviewTxt: new FormControl('',Validators.required)
  });
  rating = 0;
  ratingMsg = "";
  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private orderService: OrderService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.orderId = params.get("orderId");
      if(this.orderId) {
this.orderService.getOrder(this.orderId).subscribe(responseData => {
  console.log(responseData);
  if(responseData.message==0)
  {
    this.message = "Something wrong";
  }
  else
  {
    this.setDetails(responseData.result);
  }
})
      }
      else
      {
        this.message = "Something wrong";
      }
      // console.log(this.title);
      // console.log(params);
    });
  }

  setDetails(data: Orders)
  {
    console.log(data.delivery);
    const delivery = JSON.parse(data.delivery);
    console.log(delivery);
    this.orderedItems = this.parseObject(data.items);
    this.orderedItems.splice(0,1);
    console.log(this.orderedItems);
    this.district = delivery.district;
    this.city = delivery.city;
    this.mobilenumber = delivery.mobileno;
    this.address = delivery.address;
    this.orderedDate = data.date;
    this.time = data.time;
    this.totalPrice = data.totalPrice;
    this.comment = data.comment;
    this.status = data.status;
    this.dueDate = data.dueDate;
    if(data.status=="NC" && this.authService.getRole()=="C")
    {
      this.display = true;
    }
    else 
    {
      this.display = false;
    }
  }

  parseObject(items: string)
  {
    let arrayItems = JSON.parse(items);
    let returnArray = [Object];
    let i = 0 ;
    for(i=0;i<arrayItems.length;i++)
    {
      returnArray.push(JSON.parse(arrayItems[i]));
    }
    return returnArray;
  }

  
saveDeliverydate()
{
  console.log(this.deliveryDate);
  if(this.deliveryDate)
  {
    this.orderService.saveDeliverydate(this.orderId,this.deliveryDate).subscribe(
      responseData => {
        if(responseData.message==0)
        {
          Swal.fire({
            type: 'error',
            title: 'Something wrong',
            text: 'Try again'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        }
        else 
        {
         
          Swal.fire({
            type: 'success',
            title: 'Date updated...',
            text: 'Success'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        }

      }
    )
  }
}
  
  
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from 'src/app/modules/Orders';
import { StarRatingComponent } from 'ng-starrating';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-order-view',
  templateUrl: './customer-order-view.component.html',
  styleUrls: ['./customer-order-view.component.scss']
})
export class CustomerOrderViewComponent implements OnInit {

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
    if(data.status=="NC")
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

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    /*alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);*/
      let newVal= $event.newValue;
let valMessage = "";
      switch(newVal)
      {
        case 1:valMessage="You rated as poor service";alert(valMessage);break;
        case 2:valMessage="You rated as good service but there are issues in the product";alert(valMessage);break;
        case 3:valMessage="You rated as product is good but service is poor";alert(valMessage);break;
        case 4:valMessage="You rated as product and service is good";alert(valMessage);break;
        case 5:valMessage="You rated as product and the service is excellent";alert(valMessage);break;

      }
    this.rating = newVal;
    this.ratingMsg = valMessage;
  }

  saveReview()
  {
    
    if(this.form.get("reviewTxt").invalid)
    {
      alert("Comment is necessary");
      return ;
    }
    this.comment = this.form.get("reviewTxt").value;
    this.orderService.saveReview(this.orderId,this.comment,this.rating,this.ratingMsg).subscribe(responseData=>{
      if(responseData.message==0)
      {
        alert("Something Wrong, review didn't saved");
      }
      else 
      {
        alert("Review saved");
      }
    })
  }
  

}

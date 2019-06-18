import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-billing-payment',
  templateUrl: './billing-payment.component.html',
  styleUrls: ['./billing-payment.component.scss']
})
export class BillingPaymentComponent implements OnInit {

  formDelivery = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),

    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    mobileno: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    gender: new FormControl('', [Validators.required])
  });

  orderNote = "";
  postalCode = "";
  items = [];
  totalPrice = "";
  discount = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    public shoppingCartService: ShoppingCartService,
    private authService: AuthService,
    private customerService: CustomerService,
    private router: Router
  ) {}
  ngOnInit() {


    this.customerService
    .getCustomerProfile(this.authService.getUserId())
    .subscribe(responseData => {
      console.log(responseData);
      if (responseData.message == 0) {
        this.router.navigate(["/"]);
      } else {
        this.formDelivery.patchValue({
          fname: (responseData.result.name).split(" ")[0].toString(),
          lname: (responseData.result.name).split(" ")[1].toString(),

          address: responseData.result.address,
          city: responseData.result.city,
          district: responseData.result.district,
          mobileno: responseData.result.mobileno,
email:         responseData.result.email,

          gender: responseData.result.gender
        });
      }
    });
    this.items = this.shoppingCartService.items;
    this.totalPrice = this.shoppingCartService.totalPrice;

  }

  nameInvalid() {
    //console.log("Name"+" "+this.formDelivery.get("name").invalid);
    return this.formDelivery.get("fname").invalid && this.formDelivery.get("lname").invalid;
  }

  addressInvalid() {
    //console.log("address"+" " +this.formDelivery.get("address").value+" "+this.formDelivery.get("address").invalid);

    return this.formDelivery.get("address").invalid;
  }

  cityInvalid() {
   // console.log("city"+" "+this.formDelivery.get("city").invalid);

    return this.formDelivery.get("city").invalid;
  }

  districtInvalid() {
    //console.log("district"+" "+this.formDelivery.get("district").invalid);

    return this.formDelivery.get("district").invalid;
  }

  mobileNoInvalid() {
   // console.log("mobileno"+" "+this.formDelivery.get("mobileno").invalid);

    return this.formDelivery.get("mobileno").invalid;
  }

  saveOrder() {
    if (

        this.nameInvalid() ||
        this.addressInvalid() ||
        this.cityInvalid() ||
        this.districtInvalid() ||
        this.mobileNoInvalid()

    ) {
      alert("Delivery details should be filled");
      return -1;
    }
    let deliveryDetails = {
      id: this.authService.getUserId(),
      name: this.formDelivery.get("fname").value + this.formDelivery.get("lname").value,
      address: this.formDelivery.get("address").value,
      city: this.formDelivery.get("city").value,
      district: this.formDelivery.get("district").value,
      mobileno: this.formDelivery.get("mobileno").value
    };

    this.shoppingCartService
      .saveOrder(this.formDelivery.get("email").value,deliveryDetails,this.authService.getUserId())
      .subscribe(responseData => {
        if (responseData.message == 0) {
          alert("Something wrong Order didn't save");
        } else {
         // this.shoppingCartService.itemQuantityUpdate();
          alert("Order Saved, email has been sent");
        }
        console.log(responseData);
      });
  }

}

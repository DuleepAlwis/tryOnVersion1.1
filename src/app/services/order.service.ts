import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../modules/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllCustomerOrders(id: string)
  {
    //console.log("AAA");
    return this.http.post<{message: Number, result: Array<Orders>}>(this.url + "/api/order/retrieveCustomerOrders",{id:id});
  }

  getOrder(id:string)
  {
    console.log(id);
    return this.http.post<{message:Number,result:Orders}>(this.url+"/api/order/getOrder",{id:id});
  }

  getAllOrdersCustomer()
  {
    return this.http.post<{message:Number,result:Array<Orders>}>(this.url+"/api/order/getAllOrderCustomer",{});
  }

  getAllOrders()
  {
    return this.http.post<{message:Number,result:Array<Orders>}>(this.url+"/api/order/getAllOrderReceptionist",{});
  }

  saveReview(orderId,comment,rating,rateMsg)
  {
    return this.http.post<{message:Number}>(this.url+"/api/order/saveReview",{orderId:orderId,comment:comment,rating:rating,rateMsg:rateMsg});

  }

  removeOrderCustomer(orderId)
  {
    return this.http.post<{message:Number}>(this.url+"/api/order/removeOrderCustomer",{orderId:orderId});

  }

  saveDeliverydate(orderId,date)
  {
    return this.http.post<{message:Number}>(this.url+"/api/order/deliveryDateSave",{orderId:orderId,date:date});
  }

}

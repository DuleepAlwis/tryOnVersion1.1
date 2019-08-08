import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SupportChat } from '../modules/SupportChat';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CustomerSupportService {

  constructor(private socket:Socket,private authService:AuthService) { }

  sendMessage(message)
  {
    let customerId = this.authService.getUserId();
    this.socket.emit('Customer-Help-Message',{id:customerId,message:message});
  }

  makeConnection()
  {
    
    console.log("KKK12");
    this.socket.emit("connection",{name:"AAA"});
    console.log("KKK2317");

  }
}

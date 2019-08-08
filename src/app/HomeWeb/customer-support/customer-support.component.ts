import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CustomerSupportService } from '../../services/customer-support.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss']
})
export class CustomerSupportComponent implements OnInit {


form  = new FormGroup({
  messageHelp:new FormControl('',[Validators.required])
});

msgArry = [];
  constructor(private authService:AuthService,private customerSupportService:CustomerSupportService) { }

  ngOnInit() {
  }


  sendMessage()
  {
  if(!this.form.get("messageHelp").invalid)
    
    {
      this.customerSupportService.sendMessage(this.form.get("messageHelp").value);
    }
   
  }



}

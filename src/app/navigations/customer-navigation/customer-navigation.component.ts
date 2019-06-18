import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-customer-navigation',
  templateUrl: './customer-navigation.component.html',
  styleUrls: ['./customer-navigation.component.scss']
})
export class CustomerNavigationComponent implements OnInit {

  constructor(    private shoppingCartService: ShoppingCartService,private authService:AuthService
    ) { }

  ngOnInit() {
  }

  getShoppingCartCount()
  {
   return  this.shoppingCartService.getItemsCount();
  }

  isLoggedIn()
  {
    return this.authService.getIsAuth();
  }

  logout()
  {
    this.authService.logout();
  }

  getEmail()
  {
    return this.authService.getEmail();
  }
}

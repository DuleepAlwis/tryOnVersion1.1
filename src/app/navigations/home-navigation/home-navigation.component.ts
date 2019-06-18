import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.scss']
})
export class HomeNavigationComponent implements OnInit {

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

  getEmail()
  {
    return this.authService.getEmail();
  }

}

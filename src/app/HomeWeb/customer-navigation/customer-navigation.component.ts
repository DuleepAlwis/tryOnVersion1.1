import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-customer-navigation',
  templateUrl: './customer-navigation.component.html',
  styleUrls: ['./customer-navigation.component.scss']
})
export class CustomerNavigationComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

  itemsCountShoppingCart() {
    return this.shoppingCartService.getItemsCount();
  }

  getEmail()
  {
    //console.log(this.authService.getEmail());
    return this.authService.getEmail();
  }
}

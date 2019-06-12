import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { ShoppingCartService } from "../../services/shopping-cart.service";
@Component({
  selector: 'app-home-naviation',
  templateUrl: './home-naviation.component.html',
  styleUrls: ['./home-naviation.component.scss']
})
export class HomeNaviationComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  private loggedin: boolean;
  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(
      this.form.get("email").value,
      this.form.get("password").value
    );

    console.log(this.form.get("email").value + "123");
  }

  getRole()
  {
    return this.authService.getRole();
  }

  isLoggedIn() {
    return this.authService.getIsAuth();
  }

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

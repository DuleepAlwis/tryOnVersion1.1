import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AuthService } from 'src/app/services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-accessories-products',
  templateUrl: './accessories-products.component.html',
  styleUrls: ['./accessories-products.component.scss']
})
export class AccessoriesProductsComponent implements OnInit {



  items = [];
  category = "";
  display = false;
  headerTitle = "";
  constructor(private productService: ProductService,private authService:AuthService,private shoppingCartService:ShoppingCartService,private router:Router) {
    this.items = [];
this.getAllHandBags(0);

  }
  ngOnInit() {
  }

  getAllCaps(empArray) {
    this.category = "Caps";

    if(empArray==0)
    {
      this.items = [];
    }
    this.productService.getAllCaps().subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else {
        if(empArray==0)
        {
          this.headerTitle = "Caps";

        }


        let i = 0;
        let j = 0;
        console.log(responseData.result);
        for(i=0;i<responseData.result.length;i++)
        {
responseData.result[i].category = this.category;
this.items.push(responseData.result[i]);
        }
      }

      console.log(this.display);
    });
  }

  getAllHandBags(empArray) {
    this.category = "HandBags";
    if(empArray==0)
    {
      this.items = [[]];
    }
    this.productService.getAllHandBags().subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else {
        if(empArray==0)
        {
          this.headerTitle = "";

        }


        let i = 0;
        let j = 0;
        console.log(responseData.result);
        for(i=0;i<responseData.result.length;i++)
        {
          responseData.result[i].category = this.category;

this.items.push(responseData.result[i]);
        }
      }

      console.log(this.display);
    });
  }

  getAllBelts(empArray) {
    this.category = "Belts";

    if(empArray==0)
    {
      this.items = [[]];
    }
    this.productService.getAllBelts().subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else  {
        if(empArray==0)
        {
          this.headerTitle = "Caps";

        }


        let i = 0;
        let j = 0;
        console.log(responseData.result);
        for(i=0;i<responseData.result.length;i++)
        {
          responseData.result[i].category = this.category;

this.items.push(responseData.result[i]);
        }
      }

      console.log(this.display);
    });
  }

  getAllGloves(empArray) {
    this.category = "Gloves";

    if(empArray==0)
    {
      this.items = [[]];
    }
    this.productService.getAllGloves().subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else  {
        if(empArray==0)
        {
          this.headerTitle = "Caps";

        }


        let i = 0;
        let j = 0;
        console.log(responseData.result);
        for(i=0;i<responseData.result.length;i++)
        {
          responseData.result[i].category = this.category;

this.items.push(responseData.result[i]);
        }
      }

      console.log(this.display);
    });
  }

  shoppingCart(i) {
    console.log(this.category);
    this.shoppingCartService.setTmpItem(this.items[i]);
    this.router.navigate(["/shoppingcart", this.category]);
  }

  isLoggedIn()
  {
    return this.authService.getIsAuth();
  }


}

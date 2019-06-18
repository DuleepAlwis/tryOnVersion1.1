import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';
import { AuthData } from './../../modules/AuthData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-men-products',
  templateUrl: './men-products.component.html',
  styleUrls: ['./men-products.component.scss']
})
export class MenProductsComponent implements OnInit {

  items1 = [];
  items2 = [];
  items3 = [];
  items = [];
  category = "";
  display = false;
  headerTitle = "";

  constructor
  (private productService: ProductService,private authService:AuthService,private shoppingCartService:ShoppingCartService,
    private router:Router) {
    this.items = [];

   this.getAllShirts(1);
    //this.getAllShorts(1);
    //this.getAllTrousers(1);
    this.headerTitle = "Shirts Shorts Trousers Accessories"
  }

  ngOnInit() {

  }


  getAllShorts(empArray) {
    this.category = "Shorts";

    if(empArray==0)
    {
      this.items = [];
    }
    this.productService.getAllTights("Shorts").subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else {
        if(empArray==0)
        {
          this.headerTitle = "Shorts";

        }

        let i = 0;
        let j = 0;
        console.log(responseData.result);

        let tmp = [];
        //tmp[0] = responseData.result[0];
     /*   for(i=0;i<responseData.result.length+1;i++)
        {
          responseData.result[i].category = "Shorts";
        }
        */
       for(i=0;i<responseData.result.length;i++)
       {
         this.items.push(responseData.result[i]);
       }
      }

      console.log(this.display);
    });
  }

  getAllTrousers(empArray) {
    console.log(empArray);
    this.category = "Trousers";

    if(empArray==0)
    {
      this.items = [];
    }
    this.productService.getAllTights("Trousers").subscribe(responseData => {
     console.log(responseData);
      if (responseData.message == 0 && parseInt(empArray)==0) {
        this.headerTitle = "Stock is empty";
      } else {
        if(parseInt(empArray)==0)
        {
          this.headerTitle = "Trousers";

        }


        let i = 0;
        let j = 0;
        for(i=0;i<responseData.result.length;i++)
{
  this.items.push(responseData.result[i]);
}
        console.log(responseData.result);


      }
        //tmp[0] = responseData.result[0];

      console.log(this.display);
    });
  }

  getAllShirts(empArray) {
    this.category = "Shirts";
    if(empArray==0)
    {
      this.items = [];
    }
    this.productService.getAllClothes().subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else {
        if(empArray==0)
        {
          this.headerTitle = "Shirts";

        }



        let i = 0;
        let j = 0;
        console.log(responseData.result);
        for(i=0;i<responseData.result.length;i++)
{
  this.items.push(responseData.result[i]);
}
     /*   for(i=0;i<responseData.result.length+1;i++)
        {
          responseData.result[i].category = "Shirts";
        }
        */
        //tmp[0] = responseData.result[0];



        /*for(i=0;i<responseData.result.length;i=i+3)
        {
          let tmp = [];
          j=0;
          for(j=i;j<(i+3);j++)
          {
            if(responseData.result[j])
            {
              tmp.push(responseData.result[j]);
            }
            else
            {
              break;
            }
          }
          this.items.push(tmp);
        }*/
        /*for (i = 1; i < responseData.result.length + 1; i++) {
          j = 1;

          if (i % 3 != 0) {
            tmp.push(responseData.result[i - 1]);
            console.log(tmp);
          } else {
            tmp.push(responseData.result[i - 1]);
            this.items.push(tmp);
            tmp = [];
          }
        }
        if (tmp.length > 0) {
          this.items.push(tmp);
        }
        if (i == responseData.result.length + 1) {
          this.display = true;
        }*/
      }

      console.log(this.display);
    });
  }

  getAllCaps(empArray) {
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
          responseData.result[i].category = "Caps";
        }
        let tmp = [];
        //tmp[0] = responseData.result[0];
        for (i = 1; i < responseData.result.length + 1; i++) {
          j = 1;

          if (i % 3 != 0) {
            tmp.push(responseData.result[i - 1]);
            console.log("Tmp1");

            console.log(tmp);
            console.log("items1");

            console.log(this.items);

          } else {
            if(responseData.result[i - 1])
            {
              tmp.push(responseData.result[i - 1]);

            }
            this.items.push(tmp);
            console.log("Tmp");

            console.log(tmp);
            console.log("items");

            console.log(this.items);
            tmp = [];
          }
        }
        if(tmp.length>0)
        {
          this.items.push(tmp);
        }
        console.log(this.items);
        if (i == responseData.result.length + 1) {
          this.display = true;
        }
      }

      console.log(this.display);
    });
  }

  shoppingCart(i) {
    this.shoppingCartService.setTmpItem(this.items[i]);
    this.router.navigate(["/shoppingcart", this.category]);
  }

  isLoggedIn()
  {
    return this.authService.getIsAuth();
  }


}

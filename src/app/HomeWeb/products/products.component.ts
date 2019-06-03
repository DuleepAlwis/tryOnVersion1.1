import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items1 = [];
  items2 = [];
  items3 = [];
  items = [[]];
  display = false;
  headerTitle = "";
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.items = [[]];
    this.getAllBelts(1);
    this.getAllCaps(1);
    this.getAllGloves(1);
    this.getAllHandBags(1);
    this.getAllShirts(1);
    this.getAllShorts(1);
    this.getAllTrousers(1);
    this.headerTitle = "Shirts Shorts Trousers Accessories"
  }

  getAllShorts(empArray) {
    if(empArray==0)
    {
      this.items = [[]];
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
        for (i = 1; i < responseData.result.length + 1; i++) {
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
        }
      }

      console.log(this.display);
    });
  }

  getAllTrousers(empArray) {
    if(empArray==0)
    {
      this.items = [[]];
    }
    this.productService.getAllTights("Trousers").subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else {
        if(empArray==0)
        {
          this.headerTitle = "Trousers";

        }


        let i = 0;
        let j = 0;
        console.log(responseData.result);
        /*for(i=0;i<responseData.result.length;i++)
        {
                 setTimeout(() => {
                   this.items[i]=responseData.result[i];
                 }, 3000);

        }*/
        /* while(i<responseData.result.length)
        {
            if(responseData.result[i])
          {
                        console.log(responseData.result[i]);

            this.items1[i] = responseData.result[i];
            console.log("A"+" "+i);
          }


          if(responseData.result[++i])
          {
                        console.log(responseData.result[i]);

            this.items2[--i] = responseData.result[i];
                        console.log("B"+" "+i);

            i = i+1;
          }


          if(responseData.result[++i])
          {            console.log(responseData.result[i]);


            this.items3[((--i)-1)] = responseData.result[i];
                        console.log("C"+" "+i);
i = i+2
          }

        }*/
      /*  for(i=0;i<responseData.result.length+1;i++)
        {
          responseData.result[i].category = "Trousers";
        }
        */
        let tmp = [];
        //tmp[0] = responseData.result[0];
        for (i = 1; i < responseData.result.length + 1; i++) {
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
        }
      }

      console.log(this.display);
    });
  }

  getAllShirts(empArray) {
    if(empArray==0)
    {
      this.items = [[]];
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
     /*   for(i=0;i<responseData.result.length+1;i++)
        {
          responseData.result[i].category = "Shirts";
        }
        */
        let tmp = [];
        //tmp[0] = responseData.result[0];

        for (i = 1; i < responseData.result.length + 1; i++) {
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
        }
      }

      console.log(this.display);
    });
  }

  getAllCaps(empArray) {
    if(empArray==0)
    {
      this.items = [[]];
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
            console.log(tmp);
          } else {
            tmp.push(responseData.result[i - 1]);
            this.items.push(tmp);
            tmp = [];
          }
        }
        console.log(this.items);
        if (i == responseData.result.length + 1) {
          this.display = true;
        }
      }

      console.log(this.display);
    });
  }

  getAllHandBags(empArray) {
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
          this.headerTitle = "HandBags";

        }



        let i = 0;
        let j = 0;
        console.log(responseData.result);

        let tmp = [];
        for(i=0;i<responseData.result.length;i++)
        {
          responseData.result[i].category = "HandBags";
        }
        //tmp[0] = responseData.result[0];
        for (i = 1; i < responseData.result.length + 1; i++) {
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
        }
      }

      console.log(this.display);
    });
  }

  getAllBelts(empArray) {
    if(empArray==0)
    {
      this.items = [[]];
    }
    this.productService.getAllBelts().subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else {
        if(empArray==0)
        {
          this.headerTitle = "Belts";

        }


        let i = 0;
        let j = 0;
        console.log(responseData.result);
        for(i=0;i<responseData.result.length;i++)
        {
         // console.log(responseData.result[i]);
         responseData.result[i].category = "Belts";
        }
        let tmp = [];
        //tmp[0] = responseData.result[0];
        for (i = 1; i < responseData.result.length + 1; i++) {
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
        }
      }

      console.log(this.display);
    });
  }

  getAllGloves(empArray) {
    if(empArray==0)
    {
      this.items = [[]];
    }
    this.productService.getAllGloves().subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else {
        if(empArray==0)
        {
          this.headerTitle = "Gloves";

        }



        let i = 0;
        let j = 0;
        console.log(responseData.result);

        let tmp = [];
        for(i=0;i<responseData.result.length;i++)
        {
          //console.log(responseData.result[i]);
         responseData.result[i].category = "Gloves";
         //console.log(responseData.result[i]);

        }
        //tmp[0] = responseData.result[0];
        for (i = 1; i < responseData.result.length + 1; i++) {
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
        }
      }

      console.log(this.display);
    });
  }

  getAllProducts(empArray)
  {
    if(empArray==0)
    {
      this.items = [[]];
    }
    this.productService.getAllProducts().subscribe(responseData => {
      if (responseData.message == 0 && empArray==0) {
        this.headerTitle = "Stock is empty";
      } else {
        if(empArray==0)
        {
          this.headerTitle = "Shirts Trousers Accessories";

        }


        let i = 0;
        let j = 0;
        console.log(responseData.result);

        let tmp = [];
        //tmp[0] = responseData.result[0];
        for (i = 1; i < responseData.result.length + 1; i++) {
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
        }
      }

      console.log(this.display);
    });
  }

}

import { productImg } from './../modules/productImg';
import { Injectable } from "@angular/core";
import { Cloth } from "../modules/Cloth";
import { Tights } from '../modules/Tights';

import { Accessories } from "../modules/Accessories";
import Swal from 'sweetalert2';

import {
  HttpClient,
  HttpParams,
  HTTP_INTERCEPTORS,
  HttpInterceptor,
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  addClothes(cloth: Cloth) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/clothes/AddClothes",
        cloth
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          //alert("Something wrong");
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong ...Item did not added to stock',
            //footer: '<a href>Why do I have this issue?</a>'
          });
        } else {
          Swal.fire({
            type: 'success',
            title: 'Product',
            text: 'Item added to stock'
            //footer: '<a href>Why do I have this issue?</a>'
          });        }
      });
  }

  addTights(tights: Tights) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/clothes/AddTights",
        tights
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
         // alert("Something wrong");
         Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong ...Item did not added to stock',
          //footer: '<a href>Why do I have this issue?</a>'
        });
        } else {
          Swal.fire({
            type: 'success',
            title: 'Product',
            text: 'Item added to stock'
            //footer: '<a href>Why do I have this issue?</a>'
          });        }
      });
  }

  addGloves(gloves: Accessories) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/Accessories/AddGloves",
        gloves
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          //alert("Something wrong");
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong ...Item did not added to stock'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        } else {
          //alert("Success!!!");
          Swal.fire({
            type: 'success',
            title: 'Product',
            text: 'Item added to stock'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        }
      });
  }

  addBelts(belts: Accessories) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/Accessories/AddBelts",
        belts
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
         // alert("Something wrong");
         Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong ...Item did not added to stock',
          //footer: '<a href>Why do I have this issue?</a>'
        });
        } else {
          //alert("Success!!!");
          Swal.fire({
            type: 'success',
            title: 'Product',
            text: 'Item added to stock'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        }
      });
  }

  addCaps(gloves: Accessories) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/Accessories/AddCaps",
        gloves
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
        //  alert("Something wrong");
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong ...Item did not added to stock'
          //footer: '<a href>Why do I have this issue?</a>'
        });
        } else {
          //alert("Success!!!");
          Swal.fire({
            type: 'success',
            title: 'Product',
            text: 'Item added to stock'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        }
      });
  }

  addHandBags(handBags: Accessories) {
    this.http
      .post<{ message: Number; result: object }>(
        this.url + "/api/Accessories/AddHandBags",
        handBags
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
         // alert("Something wrong");
         Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong ...Item did not added to stock',
          //footer: '<a href>Why do I have this issue?</a>'
        });
        } else {
          //alert("Success!!!");
          Swal.fire({
            type: 'success',
            title: 'Product',
            text: 'Item added to stock'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        }
      });
  }

  getAllClothes() {
    return this.http.post<{ message: Number; result: Array<Cloth> }>(
      this.url + "/api/clothes/getAllClothes",
      {}
    );
  }

  getAllBelts() {
    return this.http.post<{ message: Number; result: Array<Accessories> }>(
      this.url + "/api/clothes/getAllBelts",
      {}
    );
  }

  getAllCaps() {
    return this.http.post<{ message: Number; result: Array<Accessories> }>(
      this.url + "/api/clothes/getAllCaps",
      {}
    );
  }

  getAllHandBags() {
    return this.http.post<{ message: Number; result: Array<Accessories> }>(
      this.url + "/api/clothes/getAllHandBags",
      {}
    );
  }

  getAllGloves() {
    return this.http.post<{ message: Number; result: Array<Accessories> }>(
      this.url + "/api/clothes/getAllGloves",
      {}
    );
  }

  getAllTights(category: string) {
    return this.http.post<{ message: Number; result: Array<Cloth> }>(
      this.url + "/api/clothes/getAllTights",
      { category: category }
    );
  }

getAllProducts()
{
  return this.http.post<{ message: Number; result: Array<Object> }>(
    this.url + "/api/clothes/getAllTights",
    {}
  );
}

  getCloth(id: string, category: string) {
    return this.http.post<{ message: Number; result: Cloth }>(
      this.url + "/api/clothes/getCloth",
      { id: id, category: category }
    );
  }

  updateClothes(id: string, cloth: Cloth) {
    this.http
      .post<{ message: Number }>(this.url + "/api/clothes/updateClothes", {
        id: id,
        product: cloth
      })
      .subscribe(responseData => {
        if (responseData.message == 0) {
          // alert("Something wrong");
          Swal.fire({
           type: 'error',
           title: 'Oops...',
           text: 'Something went wrong ...Item did not updated'
           //footer: '<a href>Why do I have this issue?</a>'
         });
         } else {
           Swal.fire({
             type: 'success',
             title: 'Updated',
             text: 'Product data updated success'
             //footer: '<a href>Why do I have this issue?</a>'
           });
              }
      });
  }

  saveClothImage(id: string, type: string, image: File, title: string) {
    const postData = new FormData();
    postData.append("id", id);
    postData.append("type", type);
    postData.append("image", image, title);
    this.http
      .post<{ message: Number; error: string }>(
        this.url + "/api/clothes/clothImageSave",
        postData
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          //alert("Something wrong");
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong ...Item did not updated'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        } else {
          alert("Success!!!");
        }
      });
  }

  getClothImages(id: string) {
    return this.http.post<{ message: Number; result: productImg }>(
      this.url + "/api/clothes/getClothImages",
      { id: id }
    );
  }

  /*-------------------------------------------------------*/

  getTight(id: string, category: string) {
    return this.http.post<{ message: Number; result: Cloth }>(
      this.url + "/api/clothes/getTights",
      { id: id, category: category }
    );
  }

  updateTights(id: string, tights: Tights) {
    this.http
      .post<{ message: Number }>(this.url + "/api/clothes/updateTights", {
        id: id,
        product: tights
      })
      .subscribe(responseData => {
        if (responseData.message == 0) {
         // alert("Something wrong");
         Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong ...Item did not updated'
          //footer: '<a href>Why do I have this issue?</a>'
        });
        } else {
          Swal.fire({
            type: 'success',
            title: 'Updated',
            text: 'Product data updated success'
            //footer: '<a href>Why do I have this issue?</a>'
          });        }
      });
  }

  saveTightImage(id: string, type: string, image: File, title: string) {
    const postData = new FormData();
    postData.append("id", id);
    postData.append("type", type);
    postData.append("image", image, title);
    this.http
      .post<{ message: Number; error: string }>(
        this.url + "/api/clothes/tightImageSave",
        postData
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
          Swal.fire({
            type: 'error',
            title: 'Unsuccess',
            text: 'Image not saved'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        } else {
          //alert("Success!!!");
          Swal.fire({
            type: 'success',
            title: 'Saved',
            text: 'Image saved'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        }
      });
  }

  getTightImages(id: string) {
    return this.http.post<{ message: Number; result: Cloth }>(
      this.url + "/api/clothes/getTightsImages",
      { id: id }
    );
  }

  /*-----------------------------------------------------------*/
  getAccessories(id: string, category: string) {
    console.log(category);
    switch (category) {
      case "Gloves":
        return this.http.post<{ message: Number; result: Accessories }>(
          this.url + "/api/clothes/getGloves",
          { id: id, category: category }
        );
        break;
      case "Belts":
        return this.http.post<{ message: Number; result: Accessories }>(
          this.url + "/api/clothes/getBelts",
          { id: id, category: category }
        );
        break;
      case "HandBags":
        return this.http.post<{ message: Number; result: Accessories }>(
          this.url + "/api/clothes/getHandBags",
          { id: id, category: category }
        );
        break;
      case "Caps":
        return this.http.post<{ message: Number; result: Accessories }>(
          this.url + "/api/clothes/getCaps",
          { id: id, category: category }
        );
        break;
    }
  }

  updateAccessories(id: string, accessories: Accessories, category: string) {
    this.http
      .post<{ message: Number }>(this.url + "/api/clothes/updateAccessories", {
        id: id,
        category: category,
        product: accessories
      })
      .subscribe(responseData => {
        if (responseData.message == 0) {
         // alert("Something wrong");
         Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong ...Item did not updated',
          //footer: '<a href>Why do I have this issue?</a>'
        });
        } else {
          //alert("Success!!!");
          Swal.fire({
            type: 'success',
            title: 'Updated',
            text: 'Item details updated',
            //footer: '<a href>Why do I have this issue?</a>'
          });
        }
      });
  }

  saveAccessoriesImage(
    id: string,
    category: string,
    type: string,
    image: File,
    title: string
  ) {
    const postData = new FormData();
    postData.append("id", id);
    postData.append("category", category);

    postData.append("type", type);
    postData.append("image", image, title);
    this.http
      .post<{ message: Number; error: string }>(
        this.url + "/api/clothes/accessoriesImageSave",
        postData
      )
      .subscribe(responseData => {
        if (responseData.message == 0) {
         // alert("Something wrong");

          Swal.fire({
            type: 'error',
            title: 'Unsuccess',
            text: 'Image not saved'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        } else {
          //alert("Success!!!");
          Swal.fire({
            type: 'success',
            title: 'Saved',
            text: 'Image saved'
            //footer: '<a href>Why do I have this issue?</a>'
          });
        }
      });
  }

  getAccessoriesImages(id: string, category: string) {
    return this.http.post<{ message: Number; result: Accessories }>(
      this.url + "/api/clothes/getAccessoriesImages",
      { id: id, category: category }
    );
  }

  removeProduct(category: string, id: string)
  {

    console.log(id);
    switch(category)
    {
      case "Shirts":
      return this.http.post<{message: Number}>(
        this.url + "/api/clothes/deleteCloth",{id:id}
      );
      break;

      case "Trousers":
      return this.http.post<{message: Number}>(
        this.url + "/api/clothes/deleteTight",{id:id}
      );
      break;

      case "Shorts":
      return this.http.post<{message: Number}>(
        this.url + "/api/clothes/deleteTight",{id:id}
      );
      break;

      case "HandBags":
      return this.http.post<{message: Number}>(
        this.url + "/api/clothes/deleteHandBags",{id:id}
      );
      break;

      case "Caps":
      return this.http.post<{message: Number}>(
        this.url + "/api/clothes/deleteCaps",{id:id}
      );
      break;

      case "Belts":
      return this.http.post<{message: Number}>(
        this.url + "/api/clothes/deleteBelts",{id:id}
      );
      break;

      case "Gloves":
      return this.http.post<{message: Number}>(
        this.url + "/api/clothes/deleteGloves",{id:id}
      );
      break;
    }

  }

  removeTight( id: string)
  {
    console.log(id);
    return this.http.post<{message: Number}>(
      this.url + "/api/clothes/deleteTight",{id:id}
    );
  }
}

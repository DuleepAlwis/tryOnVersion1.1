import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Tights } from 'src/app/modules/Tights';
import { mimeType } from '../cloth-edit/mime-type.validator';

@Component({
  selector: 'app-tights-form',
  templateUrl: './tights-form.component.html',
  styleUrls: ['./tights-form.component.scss']
})
export class TightsFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),

    MeasurementXXSPantsW1: new FormControl("", Validators.required),
    MeasurementXXSPantsW2: new FormControl("", Validators.required),
    MeasurementXSPantsW1: new FormControl("", Validators.required),
    MeasurementXSPantsW2: new FormControl("", Validators.required),
    MeasurementSPantsW1: new FormControl("", Validators.required),
    MeasurementSPantsW2: new FormControl("", Validators.required),
    MeasurementMPantsW1: new FormControl("", Validators.required),
    MeasurementMPantsW2: new FormControl("", Validators.required),
    MeasurementLPantsW1: new FormControl("", Validators.required),
    MeasurementLPantsW2: new FormControl("", Validators.required),
    MeasurementXLPantsW1: new FormControl("", Validators.required),
    MeasurementXLPantsW2: new FormControl("", Validators.required),
    MeasurementXXLPantsW1: new FormControl("", Validators.required),
    MeasurementXXLPantsW2: new FormControl("", Validators.required),



    MeasurementXXSHips1: new FormControl("", Validators.required),
    MeasurementXXSHips2: new FormControl("", Validators.required),
    MeasurementXSHips1: new FormControl("", Validators.required),
    MeasurementXSHips2: new FormControl("", Validators.required),
    MeasurementSHips1: new FormControl("", Validators.required),
    MeasurementSHips2: new FormControl("", Validators.required),
    MeasurementMHips1: new FormControl("", Validators.required),
    MeasurementMHips2: new FormControl("", Validators.required),
    MeasurementLHips1: new FormControl("", Validators.required),
    MeasurementLHips2: new FormControl("", Validators.required),
    MeasurementXLHips1: new FormControl("", Validators.required),
    MeasurementXLHips2: new FormControl("", Validators.required),
    MeasurementXXLHips1: new FormControl("", Validators.required),
    MeasurementXXLHips2: new FormControl("", Validators.required),

    
    
    MeasurementXXSLength1: new FormControl("", Validators.required),
    MeasurementXXSLength2: new FormControl("", Validators.required),
    MeasurementXSLength1: new FormControl("", Validators.required),
    MeasurementXSLength2: new FormControl("", Validators.required),
    MeasurementSLength1: new FormControl("", Validators.required),
    MeasurementSLength2: new FormControl("", Validators.required),
    MeasurementMLength1: new FormControl("", Validators.required),
    MeasurementMLength2: new FormControl("", Validators.required),
    MeasurementLLength1: new FormControl("", Validators.required),
    MeasurementLLength2: new FormControl("", Validators.required),
    MeasurementXLLength1: new FormControl("", Validators.required),
    MeasurementXLLength2: new FormControl("", Validators.required),
    MeasurementXXLLength1: new FormControl("", Validators.required),
    MeasurementXXLLength2: new FormControl("", Validators.required),

    

    MeasurementXXSCrotch1: new FormControl("", Validators.required),
    MeasurementXXSCrotch2: new FormControl("", Validators.required),
    MeasurementXSCrotch1: new FormControl("", Validators.required),
    MeasurementXSCrotch2: new FormControl("", Validators.required),
    MeasurementSCrotch1: new FormControl("", Validators.required),
    MeasurementSCrotch2: new FormControl("", Validators.required),
    MeasurementMCrotch1: new FormControl("", Validators.required),
    MeasurementMCrotch2: new FormControl("", Validators.required),
    MeasurementLCrotch1: new FormControl("", Validators.required),
    MeasurementLCrotch2: new FormControl("", Validators.required),
    MeasurementXLCrotch1: new FormControl("", Validators.required),
    MeasurementXLCrotch2: new FormControl("", Validators.required),
    MeasurementXXLCrotch1: new FormControl("", Validators.required),
    MeasurementXXLCrotch2: new FormControl("", Validators.required),



    MeasurementXXSThigh1: new FormControl("", Validators.required),
    MeasurementXXSThigh2: new FormControl("", Validators.required),
    MeasurementXSThigh1: new FormControl("", Validators.required),
    MeasurementXSThigh2: new FormControl("", Validators.required),
    MeasurementSThigh1: new FormControl("", Validators.required),
    MeasurementSThigh2: new FormControl("", Validators.required),
    MeasurementMThigh1: new FormControl("", Validators.required),
    MeasurementMThigh2: new FormControl("", Validators.required),
    MeasurementLThigh1: new FormControl("", Validators.required),
    MeasurementLThigh2: new FormControl("", Validators.required),
    MeasurementXLThigh1: new FormControl("", Validators.required),
    MeasurementXLThigh2: new FormControl("", Validators.required),
    MeasurementXXLThigh1: new FormControl("", Validators.required),
    MeasurementXXLThigh2: new FormControl("", Validators.required),



    MeasurementXXSKnee1: new FormControl("", Validators.required),
    MeasurementXXSKnee2: new FormControl("", Validators.required),
    MeasurementXSKnee1: new FormControl("", Validators.required),
    MeasurementXSKnee2: new FormControl("", Validators.required),
    MeasurementSKnee1: new FormControl("", Validators.required),
    MeasurementSKnee2: new FormControl("", Validators.required),
    MeasurementMKnee1: new FormControl("", Validators.required),
    MeasurementMKnee2: new FormControl("", Validators.required),
    MeasurementLKnee1: new FormControl('', Validators.required),
    MeasurementLKnee2: new FormControl("", Validators.required),
    MeasurementXLKnee1: new FormControl('', Validators.required),
    MeasurementXLKnee2: new FormControl("", Validators.required),
    MeasurementXXLKnee1: new FormControl('', Validators.required),
    MeasurementXXLKnee2: new FormControl("", Validators.required),
    MeasurementXXSQ: new FormControl("", Validators.required),
    MeasurementXSQ: new FormControl("", Validators.required),
    MeasurementSQ: new FormControl("", Validators.required),
    MeasurementMQ: new FormControl("", Validators.required),
    MeasurementLQ: new FormControl("", Validators.required),
    MeasurementXLQ: new FormControl("", Validators.required),
    MeasurementXXLQ: new FormControl("", Validators.required),

    MeasurementXXSP: new FormControl("", Validators.required),
    MeasurementXSP: new FormControl("", Validators.required),
    MeasurementSP: new FormControl("", Validators.required),
    MeasurementMP: new FormControl("", Validators.required),
    MeasurementLP: new FormControl("", Validators.required),
        MeasurementXLP: new FormControl("", Validators.required),
        MeasurementXXLP: new FormControl("", Validators.required)


  });

  imageFrontPreview: string;
  formFrontImage = new FormGroup({
    image: new FormControl(null, { asyncValidators: [mimeType] })
  });

  imageLeftPreview: string;
  formLeftImage = new FormGroup({
    image: new FormControl(null, { asyncValidators: [mimeType] })
  });

  imageRightPreview: string;
  formRightImage = new FormGroup({
    image: new FormControl(null, { asyncValidators: [mimeType] })
  });

  imageBackPreview: string;
  formBackImage = new FormGroup({
    image: new FormControl(null, { asyncValidators: [mimeType] })
  });

  title: string;
  newProduct: boolean = true;
  imgFrontPath: string;
  imgBackPath: string;
  imgLeftPath: string;
  imgRightPath: string;
   @Input("productId") productId: string;
  @Input("type") category: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get("title");
      // console.log(this.title);
      //console.log(params);
      console.log("IBH" + " " + this.productId);
      if (this.productId && this.category) {
        this.newProduct = false;
        this.retrieveProduct(this.productId, this.category);
      }
    });
  }

  /*@Input()
  setUpdate(id: string, type: string) {
    this.productId = id;
    this.title = type;
    console.log("AZX" + id);
    this.getProduct(id, type);
  }*/

  getProduct(id: string, type: string) {}
  frontImagePicked($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    /* if (!this.formFrontImage.get("image").valid) {
      console.log(this.formFrontImage.get("image").valid);
      return false;
    }*/
    this.formFrontImage.patchValue({ image: file });
    this.formFrontImage.get("image").updateValueAndValidity();
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageFrontPreview = (reader.result).toString();
      //  console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }

  leftImagePicked($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.formLeftImage.patchValue({ image: file });
    this.formLeftImage.get("image").updateValueAndValidity();
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageLeftPreview = (reader.result).toString();
      // console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }

  rightImagePicked($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.formRightImage.patchValue({ image: file });
    this.formRightImage.get("image").updateValueAndValidity();
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageRightPreview = (reader.result).toString();
      // console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }

  backImagePicked($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.formBackImage.patchValue({ image: file });
    this.formBackImage.get("image").updateValueAndValidity();
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageBackPreview = (reader.result).toString();
      //  console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }

  UploadImage(type: string) {
    switch (type) {
      case "Front":
        console.log(this.formFrontImage.value.image.name);
        this.productService.saveTightImage(
          this.productId,
          "Front",
          this.formFrontImage.value.image,
          this.formFrontImage.value.image.name
        );
        break;
      case "Back":
        this.productService.saveTightImage(
          this.productId,
          "Back",
          this.formBackImage.value.image,
          this.formBackImage.value.image.name
        );
        break;
      case "Left":
        this.productService.saveTightImage(
          this.productId,
          "Left",
          this.formLeftImage.value.image,
          this.formLeftImage.value.image.name
        );
        break;
      case "Right":
        this.productService.saveTightImage(
          this.productId,
          "Right",
          this.formRightImage.value.image,
          this.formRightImage.value.image.name
        );
        break;
    }
    setTimeout(() => {
      this.getImages();
    }, 11000);
  }

  addTights() {
    const tights: Tights = {
      category: this.title,
      name: this.form.get('name').value,
      description: this.form.get('description').value,



      MeasurementXXSPantsW1: this.form.get("MeasurementXXSPantsW1").value,
      MeasurementXXSPantsW2: this.form.get("MeasurementXXSPantsW2").value,
      MeasurementXSPantsW1: this.form.get("MeasurementXSPantsW1").value,
      MeasurementXSPantsW2: this.form.get("MeasurementXSPantsW2").value,
      MeasurementSPantsW1: this.form.get("MeasurementSPantsW1").value,
      MeasurementSPantsW2: this.form.get("MeasurementSPantsW2").value,
      MeasurementMPantsW1: this.form.get("MeasurementMPantsW1").value,
      MeasurementMPantsW2: this.form.get("MeasurementMPantsW2").value,
      MeasurementLPantsW1: this.form.get("MeasurementLPantsW1").value,
      MeasurementLPantsW2: this.form.get("MeasurementLPantsW2").value,
      MeasurementXLPantsW1: this.form.get("MeasurementXLPantsW1").value,
      MeasurementXLPantsW2: this.form.get("MeasurementXLPantsW2").value,
      MeasurementXXLPantsW1: this.form.get("MeasurementXXLPantsW1").value,
      MeasurementXXLPantsW2: this.form.get("MeasurementXXLPantsW2").value,

      MeasurementXXSHips1: this.form.get("MeasurementXXSHips1").value,
      MeasurementXXSHips2: this.form.get("MeasurementXXSHips2").value,
      MeasurementXSHips1: this.form.get("MeasurementXSHips1").value,
      MeasurementXSHips2: this.form.get("MeasurementXSHips2").value,
      MeasurementSHips1: this.form.get("MeasurementSHips1").value,
      MeasurementSHips2: this.form.get("MeasurementSHips2").value,
      MeasurementMHips1: this.form.get("MeasurementMHips1").value,
      MeasurementMHips2: this.form.get("MeasurementMHips2").value,
      MeasurementLHips1: this.form.get("MeasurementLHips1").value,
      MeasurementLHips2: this.form.get("MeasurementLHips2").value,
      MeasurementXLHips1: this.form.get("MeasurementXLHips1").value,
      MeasurementXLHips2: this.form.get("MeasurementXLHips2").value,
      MeasurementXXLHips1: this.form.get("MeasurementXXLHips1").value,
      MeasurementXXLHips2: this.form.get("MeasurementXXLHips2").value,


      MeasurementXXSLength1: this.form.get("MeasurementXXSLength1").value,
      MeasurementXXSLength2: this.form.get("MeasurementXXSLength2").value,
      MeasurementXSLength1: this.form.get("MeasurementXSLength1").value,
      MeasurementXSLength2: this.form.get("MeasurementXSLength2").value,
      MeasurementSLength1: this.form.get("MeasurementSLength1").value,
      MeasurementSLength2: this.form.get("MeasurementSLength2").value,
      MeasurementMLength1: this.form.get("MeasurementMLength1").value,
      MeasurementMLength2: this.form.get("MeasurementMLength2").value,
      MeasurementLLength1: this.form.get("MeasurementLLength1").value,
      MeasurementLLength2: this.form.get("MeasurementLLength2").value,
      MeasurementXLLength1: this.form.get("MeasurementXLLength1").value,
      MeasurementXLLength2: this.form.get("MeasurementXLLength2").value,
      MeasurementXXLLength1: this.form.get("MeasurementXXLLength1").value,
      MeasurementXXLLength2: this.form.get("MeasurementXXLLength2").value,



      MeasurementXXSCrotch1: this.form.get("MeasurementXXSCrotch1").value,
      MeasurementXXSCrotch2: this.form.get("MeasurementXXSCrotch2").value,
      MeasurementXSCrotch1: this.form.get("MeasurementXSCrotch1").value,
      MeasurementXSCrotch2: this.form.get("MeasurementXSCrotch2").value,
      MeasurementSCrotch1: this.form.get("MeasurementSCrotch1").value,
      MeasurementSCrotch2: this.form.get("MeasurementSCrotch2").value,
      // tslint:disable-next-line:quotemark
      MeasurementMCrotch1: this.form.get("MeasurementMCrotch2").value,
      MeasurementMCrotch2: this.form.get("MeasurementMCrotch2").value,
      MeasurementLCrotch1: this.form.get("MeasurementLCrotch1").value,
      MeasurementLCrotch2: this.form.get("MeasurementLCrotch2").value,
      MeasurementXLCrotch1: this.form.get("MeasurementXLCrotch1").value,
      MeasurementXLCrotch2: this.form.get("MeasurementXLCrotch2").value,
      MeasurementXXLCrotch1: this.form.get("MeasurementXXLCrotch1").value,
      MeasurementXXLCrotch2: this.form.get("MeasurementXXLCrotch2").value,



      MeasurementXXSThigh1: this.form.get("MeasurementXXSThigh1").value,
      MeasurementXXSThigh2: this.form.get("MeasurementXXSThigh2").value,
      MeasurementXSThigh1: this.form.get("MeasurementXSThigh1").value,
      MeasurementXSThigh2: this.form.get("MeasurementXSThigh2").value,
      MeasurementSThigh1: this.form.get("MeasurementSThigh1").value,
      MeasurementSThigh2: this.form.get("MeasurementSThigh2").value,
      MeasurementMThigh1: this.form.get("MeasurementMThigh1").value,
      MeasurementMThigh2: this.form.get("MeasurementMThigh2").value,
      MeasurementLThigh1: this.form.get("MeasurementLThigh1").value,
      MeasurementLThigh2: this.form.get("MeasurementLThigh2").value,
      MeasurementXLThigh1: this.form.get("MeasurementXLThigh1").value,
      MeasurementXLThigh2: this.form.get("MeasurementXLThigh2").value,
      MeasurementXXLThigh1: this.form.get("MeasurementXXLThigh1").value,
      MeasurementXXLThigh2: this.form.get("MeasurementXXLThigh2").value,



      MeasurementXXSKnee1: this.form.get("MeasurementXXSKnee1").value,
      MeasurementXXSKnee2: this.form.get("MeasurementXXSKnee2").value,
      MeasurementXSKnee1: this.form.get("MeasurementXSKnee1").value,
      MeasurementXSKnee2: this.form.get("MeasurementXSKnee2").value,
      MeasurementSKnee1: this.form.get("MeasurementSKnee1").value,
      MeasurementSKnee2: this.form.get("MeasurementSKnee2").value,
      MeasurementMKnee1: this.form.get("MeasurementMKnee1").value,
      MeasurementMKnee2: this.form.get("MeasurementMKnee2").value,
      MeasurementLKnee1: this.form.get("MeasurementLKnee1").value,
      MeasurementLKnee2: this.form.get("MeasurementLKnee1").value,
      MeasurementXLKnee1: this.form.get("MeasurementXLKnee1").value,
      MeasurementXLKnee2: this.form.get("MeasurementXLKnee1").value,
      MeasurementXXLKnee1: this.form.get("MeasurementXXLKnee1").value,
      MeasurementXXLKnee2: this.form.get("MeasurementXXLKnee1").value,


      MeasurementXXSQ: this.form.get("MeasurementXXSQ").value,
      MeasurementXSQ: this.form.get("MeasurementXSQ").value,

      MeasurementSQ: this.form.get("MeasurementSQ").value,
      MeasurementMQ: this.form.get("MeasurementMQ").value,
      MeasurementLQ: this.form.get("MeasurementLQ").value,
      MeasurementXLQ: this.form.get("MeasurementXLQ").value,
      MeasurementXXLQ: this.form.get("MeasurementXXLQ").value,

      MeasurementXXSP: this.form.get("MeasurementXXSP").value,

      MeasurementXSP: this.form.get("MeasurementXSP").value,

      MeasurementSP: this.form.get("MeasurementSP").value,
      MeasurementMP: this.form.get("MeasurementMP").value,
      MeasurementLP: this.form.get("MeasurementLP").value,
      MeasurementXLP: this.form.get("MeasurementXLP").value,

      MeasurementXXLP: this.form.get("MeasurementXXLP").value,

      imgFront:"",
      imgBack:"",
      imgLeft:"",
      imgRight:"",

    };
    if (this.newProduct) {
      this.productService.addTights(tights);
    } else {
      this.productService.updateTights(this.productId, tights);
    }
  }

  retrieveProduct(productId: string, category: string) {
    this.getImages();

    this.productService
      .getTight(productId, category)
      .subscribe(responseData => {
        console.log(responseData);
        this.title = responseData.result[0].category;



       this.form.patchValue({
        name: responseData.result[0].name,
       description: responseData.result[0].description,



    MeasurementXXSPantsW1: responseData.result[0].xxs.PantsW[0],
       MeasurementXXSPantsW2: responseData.result[0].xxs.PantsW[1],
       MeasurementXXSHips1: responseData.result[0].xxs.Hips[0],
       MeasurementXXSHips2: responseData.result[0].xxs.Hips[1],
       MeasurementXXSLength1: responseData.result[0].xxs.Length[0],
       MeasurementXXSLength2: responseData.result[0].xxs.Length[1],
       MeasurementXXSCrotch1: responseData.result[0].xxs.Crotch[0],
       MeasurementXXSCrotch2: responseData.result[0].xxs.Crotch[1],
       MeasurementXXSThigh1: responseData.result[0].xxs.Thigh[0],
       MeasurementXXSThigh2: responseData.result[0].xxs.Thigh[1],
       MeasurementXXSKnee1: responseData.result[0].xxs.Knee[0],
       MeasurementXXSKnee2: responseData.result[0].xxs.Knee[1],
       MeasurementXXSQ: responseData.result[0].xxs.quantity,
       MeasurementXXSP: responseData.result[0].xxs.price,



       MeasurementXSPantsW1: responseData.result[0].xs.PantsW[0],
       MeasurementXSPantsW2: responseData.result[0].xs.PantsW[1],
       MeasurementXSHips1: responseData.result[0].xs.Hips[0],
       MeasurementXSHips2: responseData.result[0].xs.Hips[1],
       MeasurementXSLength1: responseData.result[0].xs.Length[0],
       MeasurementXSLength2: responseData.result[0].xs.Length[1],
       MeasurementXSCrotch1: responseData.result[0].xs.Crotch[0],
       MeasurementXSCrotch2: responseData.result[0].xs.Crotch[1],
       MeasurementXSThigh1: responseData.result[0].xs.Thigh[0],
       MeasurementXSThigh2: responseData.result[0].xs.Thigh[1],
       MeasurementXSKnee1: responseData.result[0].xs.Knee[0],
       MeasurementXSKnee2: responseData.result[0].xs.Knee[1],
       MeasurementXSQ: responseData.result[0].xs.quantity,
       MeasurementXSP: responseData.result[0].xs.price,

        MeasurementSPantsW1: responseData.result[0].small.PantsW[0],
        MeasurementSPantsW2: responseData.result[0].small.PantsW[1],
        MeasurementSHips1: responseData.result[0].small.Hips[0],
        MeasurementSHips2: responseData.result[0].small.Hips[1],
        MeasurementSLength1: responseData.result[0].small.Length[0],
        MeasurementSLength2: responseData.result[0].small.Length[1],
        MeasurementSCrotch1: responseData.result[0].small.Crotch[0],
        MeasurementSCrotch2: responseData.result[0].small.Crotch[1],
        MeasurementSThigh1: responseData.result[0].small.Thigh[0],
        MeasurementSThigh2: responseData.result[0].small.Thigh[1],
        MeasurementSKnee1: responseData.result[0].small.Knee[0],
        MeasurementSKnee2: responseData.result[0].small.Knee[1],
        MeasurementSQ: responseData.result[0].small.quantity,
        MeasurementSP: responseData.result[0].small.price,

        MeasurementMPantsW1: responseData.result[0].medium.PantsW[0],
        MeasurementMPantsW2: responseData.result[0].medium.PantsW[1],
        MeasurementMHips1: responseData.result[0].medium.Hips[0],
        MeasurementMHips2: responseData.result[0].medium.Hips[1],
        MeasurementMLength1: responseData.result[0].medium.Length[0],
        MeasurementMLength2: responseData.result[0].medium.Length[1],
        MeasurementMCrotch1: responseData.result[0].medium.Crotch[0],
        MeasurementMCrotch2: responseData.result[0].medium.Crotch[1],
        MeasurementMThigh1: responseData.result[0].medium.Thigh[0],
        MeasurementMThigh2: responseData.result[0].medium.Thigh[1],
        MeasurementMKnee1: responseData.result[0].medium.Knee[0],
        MeasurementMKnee2: responseData.result[0].medium.Knee[1],
        MeasurementMQ: responseData.result[0].medium.quantity,
        MeasurementMP: responseData.result[0].medium.price,

        MeasurementLPantsW1: responseData.result[0].large.PantsW[0],
        MeasurementLPantsW2: responseData.result[0].large.PantsW[1],
        MeasurementLHips1: responseData.result[0].large.Hips[0],
        MeasurementLHips2: responseData.result[0].large.Hips[1],
        MeasurementLLength1: responseData.result[0].large.Length[0],
        MeasurementLLength2: responseData.result[0].large.Length[1],
        MeasurementLCrotch1: responseData.result[0].large.Crotch[0],
        MeasurementLCrotch2: responseData.result[0].large.Crotch[1],
        MeasurementLThigh1: responseData.result[0].large.Thigh[0],
        MeasurementLThigh2: responseData.result[0].large.Thigh[1],
        MeasurementLKnee1: responseData.result[0].large.Knee[0],
        MeasurementLKnee2: responseData.result[0].large.Knee[1],
        MeasurementLQ: responseData.result[0].large.quantity,
        MeasurementLP: responseData.result[0].large.price,
       
     MeasurementXLPantsW1: responseData.result[0].xl.PantsW[0],
        MeasurementXLPantsW2: responseData.result[0].xl.PantsW[1],
        MeasurementXLHips1: responseData.result[0].xl.Hips[0],
        MeasurementXLHips2: responseData.result[0].xl.Hips[1],
        MeasurementXLLength1: responseData.result[0].xl.Length[0],
        MeasurementXLLength2: responseData.result[0].xl.Length[1],
        MeasurementXLCrotch1: responseData.result[0].xl.Crotch[0],
        MeasurementXLCrotch2: responseData.result[0].xl.Crotch[1],
        MeasurementXLThigh1: responseData.result[0].xl.Thigh[0],
        MeasurementXLThigh2: responseData.result[0].xl.Thigh[1],
        MeasurementXLKnee1: responseData.result[0].xl.Knee[0],
        MeasurementXLKnee2: responseData.result[0].xl.Knee[1],
        MeasurementXLQ: responseData.result[0].xl.quantity,
        MeasurementXLP: responseData.result[0].xl.price,



        MeasurementXXLPantsW1: responseData.result[0].xxl.PantsW[0],
        MeasurementXXLPantsW2: responseData.result[0].xxl.PantsW[1],
        MeasurementXXLHips1: responseData.result[0].xxl.Hips[0],
        MeasurementXXLHips2: responseData.result[0].xxl.Hips[1],
        MeasurementXXLLength1: responseData.result[0].xxl.Length[0],
        MeasurementXXLLength2: responseData.result[0].xxl.Length[1],
        MeasurementXXLCrotch1: responseData.result[0].xxl.Crotch[0],
        MeasurementXXLCrotch2: responseData.result[0].xxl.Crotch[1],
        MeasurementXXLThigh1: responseData.result[0].xxl.Thigh[0],
        MeasurementXXLThigh2: responseData.result[0].xxl.Thigh[1],
        MeasurementXXLKnee1: responseData.result[0].xxl.Knee[0],
        MeasurementXXLKnee2: responseData.result[0].xxl.Knee[1],
        MeasurementXXLQ: responseData.result[0].xxl.quantity,
        MeasurementXXLP: responseData.result[0].xxl.price
      });
      });
  }

  getImages() {
    this.productService
      .getTightImages(this.productId)
      .subscribe(responseData => {
        if (responseData.message > 0) {
          console.log(responseData.result);
          this.imgFrontPath = responseData.result.imgFront;
          this.imgBackPath = responseData.result.imgBack;
          this.imgLeftPath = responseData.result.imgLeft;
          this.imgRightPath = responseData.result.imgRight;
        }
      });
  }

}

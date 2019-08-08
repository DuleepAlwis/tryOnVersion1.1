import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Cloth } from 'src/app/modules/Cloth';
import { mimeType } from '../cloth-edit/mime-type.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-men-suits-form',
  templateUrl: './men-suits-form.component.html',
  styleUrls: ['./men-suits-form.component.scss']
})
export class MenSuitsFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required),

    MeasurementXXSNeck1: new FormControl('', Validators.required),
    MeasurementXXSNeck2: new FormControl('', Validators.required),
    MeasurementXXSShoulderW1: new FormControl('', Validators.required),
    MeasurementXXSShoulderW2: new FormControl('', Validators.required),
    MeasurementXXSBicep1: new FormControl('', Validators.required),
    MeasurementXXSBicep2: new FormControl('', Validators.required),
    MeasurementXXSJacketL1: new FormControl('', Validators.required),
    MeasurementXXSJacketL2: new FormControl('', Validators.required),
    MeasurementXXSSleeveL1: new FormControl('', Validators.required),
    MeasurementXXSSleeveL2: new FormControl('', Validators.required),
    MeasurementXXSChest1: new FormControl('', Validators.required),
    MeasurementXXSChest2: new FormControl('', Validators.required),
    MeasurementXXSStomach1: new FormControl('', Validators.required),
    MeasurementXXSStomach2: new FormControl('', Validators.required),


    MeasurementXSNeck1: new FormControl('', Validators.required),
    MeasurementXSNeck2: new FormControl('', Validators.required),
    MeasurementXSShoulderW1: new FormControl('', Validators.required),
    MeasurementXSShoulderW2: new FormControl('', Validators.required),
    MeasurementXSBicep1: new FormControl('', Validators.required),
    MeasurementXSBicep2: new FormControl('', Validators.required),
    MeasurementXSJacketL1: new FormControl('', Validators.required),
    MeasurementXSJacketL2: new FormControl('', Validators.required),
    MeasurementXSSleeveL1: new FormControl('', Validators.required),
    MeasurementXSSleeveL2: new FormControl('', Validators.required),
    MeasurementXSChest1: new FormControl('', Validators.required),
    MeasurementXSChest2: new FormControl('', Validators.required),
    MeasurementXSStomach1: new FormControl('', Validators.required),
    MeasurementXSStomach2: new FormControl('', Validators.required),

    MeasurementSNeck1: new FormControl('', Validators.required),
    MeasurementSNeck2: new FormControl('', Validators.required),
    MeasurementSShoulderW1: new FormControl('', Validators.required),
    MeasurementSShoulderW2: new FormControl('', Validators.required),
    MeasurementSBicep1: new FormControl('', Validators.required),
    MeasurementSBicep2: new FormControl('', Validators.required),
    MeasurementSJacketL1: new FormControl('', Validators.required),
    MeasurementSJacketL2: new FormControl('', Validators.required),
    MeasurementSSleeveL1: new FormControl('', Validators.required),
    MeasurementSSleeveL2: new FormControl('', Validators.required),
    MeasurementSChest1: new FormControl('', Validators.required),
    MeasurementSChest2: new FormControl('', Validators.required),
    MeasurementSStomach1: new FormControl('', Validators.required),
    MeasurementSStomach2: new FormControl('', Validators.required),

    MeasurementMNeck1: new FormControl('', Validators.required),
    MeasurementMNeck2: new FormControl('', Validators.required),
    MeasurementMShoulderW1: new FormControl('', Validators.required),
    MeasurementMShoulderW2: new FormControl('', Validators.required),
    MeasurementMBicep1: new FormControl('', Validators.required),
    MeasurementMBicep2: new FormControl('', Validators.required),
    MeasurementMJacketL1: new FormControl('', Validators.required),
    MeasurementMJacketL2: new FormControl('', Validators.required),
    MeasurementMSleeveL1: new FormControl('', Validators.required),
    MeasurementMSleeveL2: new FormControl('', Validators.required),
    MeasurementMChest1: new FormControl('', Validators.required),
    MeasurementMChest2: new FormControl('', Validators.required),
    MeasurementMStomach1: new FormControl('', Validators.required),
    MeasurementMStomach2: new FormControl('', Validators.required),
    MeasurementLNeck1: new FormControl('', Validators.required),
    MeasurementLNeck2: new FormControl('', Validators.required),
    MeasurementLShoulderW1: new FormControl('', Validators.required),
    MeasurementLShoulderW2: new FormControl('', Validators.required),
    MeasurementLBicep1: new FormControl('', Validators.required),
    MeasurementLBicep2: new FormControl('', Validators.required),
    MeasurementLJacketL1: new FormControl('', Validators.required),
    MeasurementLJacketL2: new FormControl('', Validators.required),
    MeasurementLSleeveL1: new FormControl('', Validators.required),
    MeasurementLSleeveL2: new FormControl('', Validators.required),
    MeasurementLChest1: new FormControl('', Validators.required),
    MeasurementLChest2: new FormControl('', Validators.required),
    MeasurementLStomach1: new FormControl('', Validators.required),
    MeasurementLStomach2: new FormControl('', Validators.required),
    MeasurementSQ: new FormControl('', Validators.required),
    MeasurementSP: new FormControl('', Validators.required),
    MeasurementMQ: new FormControl('', Validators.required),
    MeasurementMP: new FormControl('', Validators.required),
    MeasurementLQ: new FormControl('', Validators.required),
    MeasurementLP: new FormControl('', Validators.required),
    MeasurementXXSQ: new FormControl('', Validators.required),
    MeasurementXXSP: new FormControl('', Validators.required),
    MeasurementXSQ: new FormControl('', Validators.required),
    MeasurementXSP: new FormControl('', Validators.required),
    MeasurementXLQ: new FormControl('', Validators.required),
    MeasurementXLP: new FormControl('', Validators.required),
    MeasurementXXLQ: new FormControl('', Validators.required),
    MeasurementXXLP: new FormControl('', Validators.required),
    



    MeasurementXLNeck1: new FormControl('', Validators.required),
    MeasurementXLNeck2: new FormControl('', Validators.required),
    MeasurementXLShoulderW1: new FormControl('', Validators.required),
    MeasurementXLShoulderW2: new FormControl('', Validators.required),
    MeasurementXLBicep1: new FormControl('', Validators.required),
    MeasurementXLBicep2: new FormControl('', Validators.required),
    MeasurementXLJacketL1: new FormControl('', Validators.required),
    MeasurementXLJacketL2: new FormControl('', Validators.required),
    MeasurementXLSleeveL1: new FormControl('', Validators.required),
    MeasurementXLSleeveL2: new FormControl('', Validators.required),
    MeasurementXLChest1: new FormControl('', Validators.required),
    MeasurementXLChest2: new FormControl('', Validators.required),
    MeasurementXLStomach1: new FormControl('', Validators.required),
    MeasurementXLStomach2: new FormControl('', Validators.required),



    MeasurementXXLNeck1: new FormControl('', Validators.required),
    MeasurementXXLNeck2: new FormControl('', Validators.required),
    MeasurementXXLShoulderW1: new FormControl('', Validators.required),
    MeasurementXXLShoulderW2: new FormControl('', Validators.required),
    MeasurementXXLBicep1: new FormControl('', Validators.required),
    MeasurementXXLBicep2: new FormControl('', Validators.required),
    MeasurementXXLJacketL1: new FormControl('', Validators.required),
    MeasurementXXLJacketL2: new FormControl('', Validators.required),
    MeasurementXXLSleeveL1: new FormControl('', Validators.required),
    MeasurementXXLSleeveL2: new FormControl('', Validators.required),
    MeasurementXXLChest1: new FormControl('', Validators.required),
    MeasurementXXLChest2: new FormControl('', Validators.required),
    MeasurementXXLStomach1: new FormControl('', Validators.required),
    MeasurementXXLStomach2: new FormControl('', Validators.required),
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
  newProduct = true;
  imgFrontPath: string;
  imgBackPath: string;
  imgLeftPath: string;
  imgRightPath: string;
  @Input('productId') productId: string;
  @Input('type') category: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get('title');
      // console.log(this.title);
      // console.log(params);
      console.log('IBH' + ' ' + this.productId);
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
    this.formFrontImage.get('image').updateValueAndValidity();
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
    this.formLeftImage.get('image').updateValueAndValidity();
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
    this.formRightImage.get('image').updateValueAndValidity();
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
    this.formBackImage.get('image').updateValueAndValidity();
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
      case 'Front':
        console.log(this.formFrontImage.value.image.name);
        this.productService.saveClothImage(
          this.productId,
          'Front',
          this.formFrontImage.value.image,
          this.formFrontImage.value.image.name
        );
        break;
      case 'Back':
        this.productService.saveClothImage(
          this.productId,
          'Back',
          this.formBackImage.value.image,
          this.formBackImage.value.image.name
        );
        break;
      case 'Left':
        this.productService.saveClothImage(
          this.productId,
          'Left',
          this.formLeftImage.value.image,
          this.formLeftImage.value.image.name
        );
        break;
      case 'Right':
        this.productService.saveClothImage(
          this.productId,
          'Right',
          this.formRightImage.value.image,
          this.formRightImage.value.image.name
        );
        break;
    }
    setTimeout(() => {
      this.getClothImages();
    }, 11000);
  }


  addCloth() {
    console.log('AAA');
    const cloth: Cloth = {
      category: this.title,
      name: this.form.get('name').value,
      description:this.form.get('description').value,

      MeasurementXXSNeck1: this.form.get('MeasurementXXSNeck1').value,
      MeasurementXXSNeck2: this.form.get('MeasurementXXSNeck2').value,
      MeasurementXXSShoulderW1: this.form.get('MeasurementXXSShoulderW1').value,
      MeasurementXXSShoulderW2: this.form.get('MeasurementXXSShoulderW2').value,
      MeasurementXXSBicep1: this.form.get('MeasurementXXSBicep1').value,
      MeasurementXXSBicep2: this.form.get('MeasurementXXSBicep2').value,
      MeasurementXXSJacketL1: this.form.get('MeasurementXXSJacketL1').value,
      MeasurementXXSJacketL2: this.form.get('MeasurementXXSJacketL2').value,
      MeasurementXXSSleeveL1: this.form.get('MeasurementXXSSleeveL1').value,
      MeasurementXXSSleeveL2: this.form.get('MeasurementXXSSleeveL2').value,
      MeasurementXXSChest1: this.form.get('MeasurementXXSChest1').value,
      MeasurementXXSChest2: this.form.get('MeasurementXXSChest2').value,
      MeasurementXXSStomach1: this.form.get('MeasurementXXSStomach1').value,
      MeasurementXXStomach2: this.form.get('MeasurementXXSStomach2').value,

      MeasurementXSNeck1: this.form.get('MeasurementXSNeck1').value,
      MeasurementXSNeck2: this.form.get('MeasurementXSNeck2').value,
      MeasurementXSShoulderW1: this.form.get('MeasurementXSShoulderW1').value,
      MeasurementXSShoulderW2: this.form.get('MeasurementXSShoulderW2').value,
      MeasurementXSBicep1: this.form.get('MeasurementXSBicep1').value,
      MeasurementXSBicep2: this.form.get('MeasurementXSBicep2').value,
      MeasurementXSJacketL1: this.form.get('MeasurementXSJacketL1').value,
      MeasurementXSJacketL2: this.form.get('MeasurementXSJacketL2').value,
      MeasurementXSSleeveL1: this.form.get('MeasurementXSSleeveL1').value,
      MeasurementXSSleeveL2: this.form.get('MeasurementXSSleeveL2').value,
      MeasurementXSChest1: this.form.get('MeasurementXSChest1').value,
      MeasurementXSChest2: this.form.get('MeasurementXSChest2').value,
      MeasurementXSStomach1: this.form.get('MeasurementXSStomach1').value,
      MeasurementXSStomach2: this.form.get('MeasurementXSStomach2').value,


      MeasurementSNeck1: this.form.get('MeasurementSNeck1').value,
      MeasurementSNeck2: this.form.get('MeasurementSNeck2').value,
      MeasurementSShoulderW1: this.form.get('MeasurementSShoulderW1').value,
      MeasurementSShoulderW2: this.form.get('MeasurementSShoulderW2').value,
      MeasurementSBicep1: this.form.get('MeasurementSBicep1').value,
      MeasurementSBicep2: this.form.get('MeasurementSBicep2').value,
      MeasurementSJacketL1: this.form.get('MeasurementSJacketL1').value,
      MeasurementSJacketL2: this.form.get('MeasurementSJacketL2').value,
      MeasurementSSleeveL1: this.form.get('MeasurementSSleeveL1').value,
      MeasurementSSleeveL2: this.form.get('MeasurementSSleeveL2').value,
      MeasurementSChest1: this.form.get('MeasurementSChest1').value,
      MeasurementSChest2: this.form.get('MeasurementSChest2').value,
      MeasurementSStomach1: this.form.get('MeasurementSStomach1').value,
      MeasurementSStomach2: this.form.get('MeasurementSStomach2').value,

      MeasurementMNeck1: this.form.get('MeasurementMNeck1').value,
      MeasurementMNeck2: this.form.get('MeasurementMNeck2').value,
      MeasurementMShoulderW1: this.form.get('MeasurementMShoulderW1').value,
      MeasurementMShoulderW2: this.form.get('MeasurementMShoulderW2').value,
      MeasurementMBicep1: this.form.get('MeasurementMBicep1').value,
      MeasurementMBicep2: this.form.get('MeasurementMBicep2').value,
      MeasurementMJacketL1: this.form.get('MeasurementMJacketL1').value,
      MeasurementMJacketL2: this.form.get('MeasurementMJacketL2').value,
      MeasurementMSleeveL1: this.form.get('MeasurementMSleeveL1').value,
      MeasurementMSleeveL2: this.form.get('MeasurementMSleeveL2').value,
      MeasurementMChest1: this.form.get('MeasurementMChest1').value,
      MeasurementMChest2: this.form.get('MeasurementMChest2').value,
      MeasurementMStomach1: this.form.get('MeasurementMStomach1').value,
      MeasurementMStomach2: this.form.get('MeasurementMStomach2').value,

      MeasurementLNeck1: this.form.get('MeasurementLNeck1').value,
      MeasurementLNeck2: this.form.get('MeasurementLNeck2').value,
      MeasurementLShoulderW1: this.form.get('MeasurementLShoulderW1').value,
      MeasurementLShoulderW2: this.form.get('MeasurementLShoulderW2').value,
      MeasurementLBicep1: this.form.get('MeasurementLBicep1').value,
      MeasurementLBicep2: this.form.get('MeasurementLBicep2').value,
      MeasurementLJacketL1: this.form.get('MeasurementLJacketL1').value,
      MeasurementLJacketL2: this.form.get('MeasurementLJacketL2').value,
      MeasurementLSleeveL1: this.form.get('MeasurementLSleeveL1').value,
      MeasurementLSleeveL2: this.form.get('MeasurementLSleeveL2').value,
      MeasurementLChest1: this.form.get('MeasurementLChest1').value,
      MeasurementLChest2: this.form.get('MeasurementLChest2').value,
      MeasurementLStomach1: this.form.get('MeasurementLStomach1').value,
      MeasurementLStomach2: this.form.get('MeasurementLStomach2').value,

      MeasurementXLNeck1: this.form.get('MeasurementXLNeck1').value,
      MeasurementXLNeck2: this.form.get('MeasurementXLNeck2').value,
      MeasurementXLShoulderW1: this.form.get('MeasurementXLShoulderW1').value,
      MeasurementXLShoulderW2: this.form.get('MeasurementXLShoulderW2').value,
      MeasurementXLBicep1: this.form.get('MeasurementXLBicep1').value,
      MeasurementXLBicep2: this.form.get('MeasurementXLBicep2').value,
      MeasurementXLJacketL1: this.form.get('MeasurementXLJacketL1').value,
      MeasurementXLJacketL2: this.form.get('MeasurementXLJacketL2').value,
      MeasurementXLSleeveL1: this.form.get('MeasurementXLSleeveL1').value,
      MeasurementXLSleeveL2: this.form.get('MeasurementXLSleeveL2').value,
      MeasurementXLChest1: this.form.get('MeasurementXLChest1').value,
      MeasurementXLChest2: this.form.get('MeasurementXLChest2').value,
      MeasurementXLStomach1: this.form.get('MeasurementXLStomach1').value,
      MeasurementXLStomach2: this.form.get('MeasurementXLStomach2').value,

      MeasurementXXLNeck1: this.form.get('MeasurementXXLNeck1').value,
      MeasurementXXLNeck2: this.form.get('MeasurementXXLNeck2').value,
      MeasurementXXLShoulderW1: this.form.get('MeasurementXXLShoulderW1').value,
      MeasurementXXLShoulderW2: this.form.get('MeasurementXXLShoulderW2').value,
      MeasurementXXLBicep1: this.form.get('MeasurementXXLBicep1').value,
      MeasurementXXLBicep2: this.form.get('MeasurementXXLBicep2').value,
      MeasurementXXLJacketL1: this.form.get('MeasurementXXLJacketL1').value,
      MeasurementXXLJacketL2: this.form.get('MeasurementXXLJacketL2').value,
      MeasurementXXLSleeveL1: this.form.get('MeasurementXXLSleeveL1').value,
      MeasurementXXLSleeveL2: this.form.get('MeasurementXXLSleeveL2').value,
      MeasurementXXLChest1: this.form.get('MeasurementXXLChest1').value,
      MeasurementXXLChest2: this.form.get('MeasurementXXLChest2').value,
      MeasurementXXLStomach1: this.form.get('MeasurementXXLStomach1').value,
      MeasurementXXLStomach2: this.form.get('MeasurementXXLStomach2').value,


      MeasurementSQ: this.form.get('MeasurementSQ').value,
      MeasurementSP: this.form.get('MeasurementSP').value,
      MeasurementMQ: this.form.get('MeasurementMQ').value,
      MeasurementMP: this.form.get('MeasurementMP').value,
      MeasurementLQ: this.form.get('MeasurementLQ').value,
      MeasurementLP: this.form.get('MeasurementLP').value,
      MeasurementXXSQ: this.form.get('MeasurementXXSQ').value,
      MeasurementXXSP: this.form.get('MeasurementXXSP').value,
      MeasurementXSQ: this.form.get('MeasurementXSQ').value,
      MeasurementXSP: this.form.get('MeasurementXSP').value,
      MeasurementXLQ: this.form.get('MeasurementXLQ').value,
      MeasurementXLP: this.form.get('MeasurementXLP').value,
      MeasurementXXLQ: this.form.get('MeasurementXXLQ').value,
      MeasurementXXLP: this.form.get('MeasurementXXLP').value,
      imgFront:'',
      imgBack: "",
      imgLeft: "",
      imgRight:'',
    };
    console.log(cloth);
    if (this.newProduct) {
      this.productService.addClothes(cloth);
    } else {
      this.productService.updateClothes(this.productId, cloth);
    }
  }

  retrieveProduct(productId: string, category: string) {
    this.getClothImages();

    this.productService
      .getCloth(productId, category)
      .subscribe(responseData => {
        console.log(responseData);
        this.title = responseData.result[0].category;
        this.form.patchValue({
          name: responseData.result[0].name,
          description:responseData.result[0].description,

          MeasurementXXSNeck1: responseData.result[0].xxs.neck[0],
          MeasurementXXSNeck2: responseData.result[0].xxs.neck[1],
          MeasurementXXSShoulderW1: responseData.result[0].xxs.shoulderweist[0],
          MeasurementXXSShoulderW2: responseData.result[0].xxs.shoulderweist[1],
          MeasurementXXSBicep1: responseData.result[0].xxs.biceps[0],
          MeasurementXXSBicep2: responseData.result[0].xxs.biceps[1],
          MeasurementXXSJacketL1: responseData.result[0].xxs.jacketlength[0],
          MeasurementXXSJacketL2: responseData.result[0].xxs.jacketlength[1],
          MeasurementXXSSleeveL1: responseData.result[0].xxs.sleevelength[0],
          MeasurementXXSSleeveL2: responseData.result[0].xxs.sleevelength[1],
          MeasurementXXSChest1: responseData.result[0].xxs.chest[0],
          MeasurementXXSChest2: responseData.result[0].xxs.chest[1],
          MeasurementXXSStomach1: responseData.result[0].xxs.stomach[0],
          MeasurementXXSStomach2: responseData.result[0].xxs.stomach[1],

          MeasurementXSNeck1: responseData.result[0].xs.neck[0],
          MeasurementXSNeck2: responseData.result[0].xs.neck[1],
          MeasurementXSShoulderW1: responseData.result[0].xs.shoulderweist[0],
          MeasurementXSShoulderW2: responseData.result[0].xs.shoulderweist[1],
          MeasurementXSBicep1: responseData.result[0].xs.biceps[0],
          MeasurementXSBicep2: responseData.result[0].xs.biceps[1],
          MeasurementXSJacketL1: responseData.result[0].xs.jacketlength[0],
          MeasurementXSJacketL2: responseData.result[0].xs.jacketlength[1],
          MeasurementXSSleeveL1: responseData.result[0].xs.sleevelength[0],
          MeasurementXSSleeveL2: responseData.result[0].xs.sleevelength[1],
          MeasurementXSChest1: responseData.result[0].xs.chest[0],
          MeasurementXSChest2: responseData.result[0].xs.chest[1],
          MeasurementXSStomach1: responseData.result[0].xs.stomach[0],
          MeasurementXSStomach2: responseData.result[0].xs.stomach[1],


          
          MeasurementSNeck1: responseData.result[0].small.neck[0],
          MeasurementSNeck2: responseData.result[0].small.neck[1],
          MeasurementSShoulderW1: responseData.result[0].small.shoulderweist[0],
          MeasurementSShoulderW2: responseData.result[0].small.shoulderweist[1],
          MeasurementSBicep1: responseData.result[0].small.biceps[0],
          MeasurementSBicep2: responseData.result[0].small.biceps[1],
          MeasurementSJacketL1: responseData.result[0].small.jacketlength[0],
          MeasurementSJacketL2: responseData.result[0].small.jacketlength[1],
          MeasurementSSleeveL1: responseData.result[0].small.sleevelength[0],
          MeasurementSSleeveL2: responseData.result[0].small.sleevelength[1],
          MeasurementSChest1: responseData.result[0].small.chest[0],
          MeasurementSChest2: responseData.result[0].small.chest[1],
          MeasurementSStomach1: responseData.result[0].small.stomach[0],
          MeasurementSStomach2: responseData.result[0].small.stomach[1],


          /*---*/
          MeasurementMNeck1: responseData.result[0].medium.neck[0],
          MeasurementMNeck2: responseData.result[0].medium.neck[1],
          MeasurementMShoulderW1: responseData.result[0].medium.shoulderweist[0],
          MeasurementMShoulderW2: responseData.result[0].medium.shoulderweist[1],
          MeasurementMBicep1: responseData.result[0].medium.biceps[0],
          MeasurementMBicep2: responseData.result[0].medium.biceps[1],
          MeasurementMJacketL1: responseData.result[0].medium.jacketlength[0],
          MeasurementMJacketL2: responseData.result[0].medium.jacketlength[1],
          MeasurementMSleeveL1: responseData.result[0].medium.sleevelength[0],
          MeasurementMSleeveL2: responseData.result[0].medium.sleevelength[1],
          MeasurementMChest1: responseData.result[0].medium.chest[0],
          MeasurementMChest2: responseData.result[0].medium.chest[1],
          MeasurementMStomach1: responseData.result[0].medium.stomach[0],
          MeasurementMStomach2: responseData.result[0].medium.stomach[1],
          /*---*/
          MeasurementLNeck1: responseData.result[0].large.neck[0],
          MeasurementLNeck2: responseData.result[0].large.neck[1],
          MeasurementLShoulderW1: responseData.result[0].large.shoulderweist[0],
          MeasurementLShoulderW2: responseData.result[0].large.shoulderweist[1],
          MeasurementLBicep1: responseData.result[0].large.biceps[0],
          MeasurementLBicep2: responseData.result[0].large.biceps[1],
          MeasurementLJacketL1: responseData.result[0].large.jacketlength[0],
          MeasurementLJacketL2: responseData.result[0].large.jacketlength[1],
          MeasurementLSleeveL1: responseData.result[0].large.sleevelength[0],
          MeasurementLSleeveL2: responseData.result[0].large.sleevelength[1],
          MeasurementLChest1: responseData.result[0].large.chest[0],
          MeasurementLChest2: responseData.result[0].large.chest[1],
          MeasurementLStomach1: responseData.result[0].large.stomach[0],
          MeasurementLStomach2: responseData.result[0].large.stomach[1],


          MeasurementXLNeck1: responseData.result[0].xl.neck[0],
          MeasurementXLNeck2: responseData.result[0].xl.neck[1],
          MeasurementXLShoulderW1: responseData.result[0].xl.shoulderweist[0],
          MeasurementXLShoulderW2: responseData.result[0].xl.shoulderweist[1],
          MeasurementXLBicep1: responseData.result[0].xl.biceps[0],
          MeasurementXLBicep2: responseData.result[0].xl.biceps[1],
          MeasurementXLJacketL1: responseData.result[0].xl.jacketlength[0],
          MeasurementXLJacketL2: responseData.result[0].xl.jacketlength[1],
          MeasurementXLSleeveL1: responseData.result[0].xl.sleevelength[0],
          MeasurementXLSleeveL2: responseData.result[0].xl.sleevelength[1],
          MeasurementXLChest1: responseData.result[0].xl.chest[0],
          MeasurementXLChest2: responseData.result[0].xl.chest[1],
          MeasurementXLStomach1: responseData.result[0].xl.stomach[0],
          MeasurementXLStomach2: responseData.result[0].xl.stomach[1],



          MeasurementXXLNeck1: responseData.result[0].xxl.neck[0],
          MeasurementXXLNeck2: responseData.result[0].xxl.neck[1],
          MeasurementXXLShoulderW1: responseData.result[0].xxl.shoulderweist[0],
          MeasurementXXLShoulderW2: responseData.result[0].xxl.shoulderweist[1],
          MeasurementXXLBicep1: responseData.result[0].xxl.biceps[0],
          MeasurementXXLBicep2: responseData.result[0].xxl.biceps[1],
          MeasurementXXLJacketL1: responseData.result[0].xxl.jacketlength[0],
          MeasurementXXLJacketL2: responseData.result[0].xxl.jacketlength[1],
          MeasurementXXLSleeveL1: responseData.result[0].xxl.sleevelength[0],
          MeasurementXXLSleeveL2: responseData.result[0].xxl.sleevelength[1],
          MeasurementXXLChest1: responseData.result[0].xxl.chest[0],
          MeasurementXXLChest2: responseData.result[0].xxl.chest[1],
          MeasurementXXLStomach1: responseData.result[0].xxl.stomach[0],
          MeasurementXXLStomach2: responseData.result[0].xxl.stomach[1],

          /*--------------------------------*/

          MeasurementSQ: responseData.result[0].small.quantity,
      MeasurementSP: responseData.result[0].small.price,
      MeasurementMQ: responseData.result[0].medium.quantity,
      MeasurementMP: responseData.result[0].medium.price,
      MeasurementLQ: responseData.result[0].large.quantity,
      MeasurementLP: responseData.result[0].large.price,
      MeasurementXXSQ: responseData.result[0].xxs.quantity,
      MeasurementXXSP: responseData.result[0].xxs.price,
      MeasurementXSQ: responseData.result[0].xs.quantity,
      MeasurementXSP: responseData.result[0].xs.price,
      MeasurementXXLQ: responseData.result[0].xxl.quantity,
      MeasurementXXLP: responseData.result[0].xxl.price,
      MeasurementXLQ: responseData.result[0].xl.quantity,
      MeasurementXLP: responseData.result[0].xl.price
        });

        /* this.imgFrontPath = responseData.result[0].imgFront;
        this.imgBackPath = responseData.result[0].imgBack;
        this.imgLeftPath = responseData.result[0].imgLeft;
        this.imgRightPath = responseData.result[0].imgRight;
        */
      });
  }

  getClothImages() {
    this.productService
      .getClothImages(this.productId)
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

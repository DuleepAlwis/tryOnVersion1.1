import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SearchProductService } from 'src/app/services/search-product.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-customer-measurement',
  templateUrl: './customer-measurement.component.html',
  styleUrls: ['./customer-measurement.component.scss']
})
export class CustomerMeasurementComponent implements OnInit {

  formBottum = new FormGroup({
    MeasurementPantsW : new FormControl('',Validators.required),
    MeasurementHips : new FormControl('',Validators.required),
    MeasurementLength : new FormControl('',Validators.required),
    MeasurementCrotch : new FormControl('',Validators.required),
    MeasurementThigh : new FormControl('',Validators.required),
    MeasurementKnee : new FormControl('',Validators.required)

  });

  formShirt = new FormGroup({
    MeasurementNeck : new FormControl('',Validators.required),
    MeasurementShoulderW : new FormControl('',Validators.required),
    MeasurementBicep : new FormControl('',Validators.required),
    MeasurementJacketL : new FormControl('',Validators.required),
    MeasurementSleeveL : new FormControl('',Validators.required),
    MeasurementChest : new FormControl('',Validators.required),
    MeasurementStomach : new FormControl('',Validators.required)


  });


  newMeasuremnts=false;

  measuremntId = "";
display:boolean = false;
gender = "M";

  constructor(private authService:AuthService,private searchProduct: SearchProductService,private productService:ProductService) { }

  ngOnInit() {
    this.getShirtMeasurement();
    this.getBottumMeasurement();
  }

  bottumMeasurementSave()
  {
    const data = {
      MeasurementPantsW: this.formBottum.get("MeasurementPantsW").value,
      MeasurementHips: this.formBottum.get("MeasurementHips").value,
      MeasurementLength: this.formBottum.get("MeasurementLength").value,
      MeasurementCrotch: this.formBottum.get("MeasurementCrotch").value,
      MeasurementThigh: this.formBottum.get("MeasurementThigh").value,
      MeasurementKnee: this.formBottum.get("MeasurementKnee").value
    }

    if(this.newMeasuremnts==true)
    {
      this.searchProduct.saveBottumMeasurement(this.authService.getUserId(),data).subscribe(
        responseData => {
            if(responseData.message==0)
            {
              alert("Something wrong");
            }
            if(responseData.message!=0)
            {
              alert("Measuremnts saved successfully");


            }
        });
    }
    else
    {
      this.searchProduct.updateBottumMeasurement(this.authService.getUserId(),data).subscribe(
        responseData => {
            if(responseData.message==0)
            {
              alert("Something wrong");
            }
            if(responseData.message!=0)
            {
              alert("Measuremnts saved successfully");
              this.measuremntId =  responseData.id;
            }

        });
    }

  }

  getBottumMeasurement()
  {
    console.log(this.newMeasuremnts);
    this.searchProduct.getBottumMeasurement(this.authService.getUserId()).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert('Measuremnt details not provided');
        this.newMeasuremnts = true;
        console.log(this.newMeasuremnts);
      }
      else
      {
        this.formBottum.patchValue({
          MeasurementPantsW: responseData.result[0].MeasurementPantsW,
          MeasurementHips: responseData.result[0].MeasurementHips,
          MeasurementLength: responseData.result[0].MeasurementLength,
          MeasurementCrotch: responseData.result[0].MeasurementCrotch,
          MeasurementThigh: responseData.result[0].MeasurementThigh,
          MeasurementKnee: responseData.result[0].MeasurementKnee
        });
        this.newMeasuremnts = false;

      }

      //this.item = item;
      this.display = true;

    });
  }


  shirtMeasurementSave()
  {
    const data = {
      MeasurementNeck: this.formShirt.get("MeasurementNeck").value,
      MeasurementShoulderW: this.formShirt.get("MeasurementShoulderW").value,
      MeasurementBicep: this.formShirt.get("MeasurementBicep").value,
      MeasurementJacketL: this.formShirt.get("MeasurementJacketL").value,
      MeasurementSleeveL: this.formShirt.get("MeasurementSleeveL").value,
      MeasurementChest: this.formShirt.get("MeasurementChest").value
    }
    if(this.newMeasuremnts==true)
    {
      this.searchProduct.saveShirtMeasurement(this.authService.getUserId(),data).subscribe(
        responseData => {
            if(responseData.message==0)
            {
              alert("Something wrong");
            }
            if(responseData.message!=0)
            {
              alert("Measuremnts saved successfully");
              this.measuremntId = responseData.id;
             // this.getAllShirts();
this.display = true;
            }
        });
    }
    else
    {
      this.searchProduct.updateShirtMeasurement(this.authService.getUserId(),data).subscribe(
        responseData => {
            if(responseData.message==0)
            {
              alert("Something wrong");
            }
            if(responseData.message!=0)
            {
              alert("Measuremnts saved successfully");
              this.measuremntId = responseData.id;
             // this.getAllShirts();
              this.display = true;

            }
        });
    }

  }

  getShirtMeasurement()
  {
    this.searchProduct.getShirtMeasurement(this.authService.getUserId()).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert('Measuremnt details not provided');
        this.newMeasuremnts = true;
      }
      else
      {
        this.formShirt.patchValue({
          MeasurementNeck:responseData.result[0].MeasurementNeck,
          MeasurementShoulderW:responseData.result[0].MeasurementShoulderW,
          MeasurementBicep:responseData.result[0].MeasurementBicep,
          MeasurementJacketL:responseData.result[0].MeasurementJacketL,
          MeasurementSleeveL:responseData.result[0].MeasurementSleeveL,
          MeasurementChest:responseData.result[0].MeasurementChest
        });
        this.newMeasuremnts = false;

      }
     // this.item = item;
      this.display = true;

    });
  }



}

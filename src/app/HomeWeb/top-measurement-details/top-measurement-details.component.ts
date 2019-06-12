import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SearchProductService } from 'src/app/services/search-product.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-top-measurement-details',
  templateUrl: './top-measurement-details.component.html',
  styleUrls: ['./top-measurement-details.component.scss']
})
export class TopMeasurementDetailsComponent implements OnInit {

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

  genderSelect(gender)
  {
    this.gender = gender;
    console.log(this.gender);
  }

  genderMale()
  {
    this.gender = "M";
  }

  genderFeMale()
  {
    this.gender = "F";
  }

}

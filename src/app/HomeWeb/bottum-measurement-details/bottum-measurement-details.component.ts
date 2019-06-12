import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SearchProductService } from 'src/app/services/search-product.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bottum-measurement-details',
  templateUrl: './bottum-measurement-details.component.html',
  styleUrls: ['./bottum-measurement-details.component.scss']
})
export class BottumMeasurementDetailsComponent implements OnInit {

  formBottum = new FormGroup({
    MeasurementPantsW : new FormControl('',Validators.required),
    MeasurementHips : new FormControl('',Validators.required),
    MeasurementLength : new FormControl('',Validators.required),
    MeasurementCrotch : new FormControl('',Validators.required),
    MeasurementThigh : new FormControl('',Validators.required),
    MeasurementKnee : new FormControl('',Validators.required)

  });

  newMeasuremnts=false;

  measuremntId = "";
display:boolean = false;
gender = "M";
  constructor(private authService:AuthService,private searchProduct: SearchProductService,private productService:ProductService) { }

  ngOnInit() {
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

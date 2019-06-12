import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-men-bottom-measurements',
  templateUrl: './men-bottom-measurements.component.html',
  styleUrls: ['./men-bottom-measurements.component.scss']
})
export class MenBottomMeasurementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form2 = new FormGroup({
    pWaist: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    hips: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    pLength: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    crotch: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    thigh: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    knee: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
  });

  submitForms = function() {
      document.forms["form1"].submit();
      document.forms["form2"].submit();
      return true;
  }
}

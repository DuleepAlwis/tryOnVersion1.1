import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-men-top-measurements',
  templateUrl: './men-top-measurements.component.html',
  styleUrls: ['./men-top-measurements.component.scss']
})
export class MenMeasurementsComponent implements OnInit {

  constructor() { }
  
  form1 = new FormGroup({
    neck: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    shoulder: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    bicep: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    jacket: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    sleeve: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    chest: new FormControl(null, [Validators.required,Validators.maxLength(3)]),
    stomach: new FormControl(null, [Validators.required,Validators.maxLength(3)])
  });


  ngOnInit() {
  }

}

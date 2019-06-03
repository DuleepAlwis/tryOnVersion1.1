import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-receptionist-products',
  templateUrl: './receptionist-products.component.html',
  styleUrls: ['./receptionist-products.component.scss']
})
export class ReceptionistProductsComponent implements OnInit {


  items = [
    "T-Shirts",
    "Shirts",
    "Trousers",
    "Shorts",
    "Sarees",
    "Belts",
    "Caps",
    "Gloves",
    "HandBags"
  ];
  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigate(['Receptionist','suitform',this.items[1]]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReceptionistSidebarService } from './../../services/receptionist-sidebar.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-receptionist-main',
  templateUrl: './receptionist-main.component.html',
  styleUrls: ['./receptionist-main.component.scss']
})
export class ReceptionistMainComponent implements OnInit {
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
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
    //this.router.navigate(['Receptionist','suitform',this.items[1]]);
    
    //this.router.navigate(['Receptionist','receptionist-dashboard']);
    this.router.navigateByUrl("/Receptionist/receptionistdashboard");
  }


  logout() {
    this.authService.logout();
  }
}

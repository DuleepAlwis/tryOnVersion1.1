import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-receptionist-navigation',
  templateUrl: './receptionist-navigation.component.html',
  styleUrls: ['./receptionist-navigation.component.scss']
})
export class ReceptionistNavigationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}

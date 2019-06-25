import { Component, OnInit } from '@angular/core';
import { ReceptionistSidebarService } from './../../services/receptionist-sidebar.service';

@Component({
  selector: 'app-receptionist-nav',
  templateUrl: './receptionist-nav.component.html',
  styleUrls: ['./receptionist-nav.component.scss']
})
export class ReceptionistNavComponent implements OnInit {

  constructor(private appService: ReceptionistSidebarService) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
}

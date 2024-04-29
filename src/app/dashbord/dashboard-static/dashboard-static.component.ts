import { Component } from '@angular/core';
interface sideNavToggle {
  screenWidth : number;
  collapsed : boolean;
}
@Component({
  selector: 'app-dashboard-static',
  templateUrl: './dashboard-static.component.html',
  styleUrl: './dashboard-static.component.scss'
})
export class DashboardStaticComponent {
  isSideNavCollapsed = false ;
  screenWidth = 0;
  onToggleLeSideNav(data : sideNavToggle) : void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

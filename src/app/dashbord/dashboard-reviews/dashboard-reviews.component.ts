import { Component } from '@angular/core';
interface sideNavToggle {
  screenWidth : number;
  collapsed : boolean;
}
@Component({
  selector: 'app-dashboard-reviews',
  templateUrl: './dashboard-reviews.component.html',
  styleUrl: './dashboard-reviews.component.scss'
})
export class DashboardReviewsComponent  {
  isSideNavCollapsed = false ;
  screenWidth = 0;
  onToggleLeSideNav(data : sideNavToggle) : void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

import { Component } from '@angular/core';
interface sideNavToggle {
  screenWidth : number;
  collapsed : boolean;
}
@Component({
  selector: 'app-dashbord-users',
  templateUrl: './dashbord-users.component.html',
  styleUrl: './dashbord-users.component.scss'
})
export class DashbordUsersComponent {
  isSideNavCollapsed = false ;
  screenWidth = 0;
  onToggleLeSideNav(data : sideNavToggle) : void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

import { Component } from '@angular/core';
interface sideNavToggle {
  screenWidth : number;
  collapsed : boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VolScraperFrontEnd';
  isSideNavCollapsed = false ;
  screenWidth = 0;
  onToggleLeSideNav(data : sideNavToggle) : void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

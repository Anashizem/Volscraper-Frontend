import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss'
})
export class DashboardMainComponent implements OnInit {
  @Input() collapsed = false ;
  @Input() screenWidth = 0 ;


  constructor() { }

  ngOnInit(): void {
    this.getBodyClass();
  }
  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768) {
      styleClass = 'body-md-screen';
    }
    console.log(styleClass);
    return styleClass;
  }

}

import { Component, OnInit , Output , EventEmitter, HostListener, Optional} from '@angular/core';
import {navbarData} from './nav-data'
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import { style, transition, trigger ,animate, keyframes } from '@angular/animations';
import { Transform } from 'stream';

interface sideNavToggle {
    screenWidth : number;
    collapsed : boolean;
  }
@Component({
  selector: 'app-dashboard-side-nav',
  templateUrl: './dashboard-side-nav.component.html',
  styleUrls: ['./dashboard-side-nav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('rotate' , [
      transition (':enter' , [
        animate('1000ms' , 
          keyframes([
            style({transform : 'rotate(0deg)' , offset : '0'}),
            style({transform : 'rotate(2turn)' , offset : '1'}),

          ])
        )
      ])
    ])
  ]
})

  export class DashboardSideNavComponent implements OnInit {
    @Output() onToggleSideNav : EventEmitter<sideNavToggle> = new EventEmitter();
    collapsed  = false;
    screenWidth = 0 ;
    navData = navbarData ;
    faXmark =faXmark;

    @HostListener('window:resize' , ['$event'])
    onResize(event:any) {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth  <= 768 ) {
        this.collapsed = false;
        this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})
      }
    }
    ngOnInit(): void {
      this.screenWidth = window.innerWidth;
    }

    toggleCollapsed(){
      this.collapsed = !this.collapsed
      console.log(this.collapsed);
      this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})
    }
    closeCollapsed(){
      this.collapsed = false
      console.log(this.collapsed);
      this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})

    }
  }

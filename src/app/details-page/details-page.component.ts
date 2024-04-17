import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RatingPopupComponent } from '../rating-popup/rating-popup.component';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent {
  constructor( private dialogRef: MatDialog) {}
  openDialog(): void {
    this.dialogRef.open(RatingPopupComponent);
  }
}

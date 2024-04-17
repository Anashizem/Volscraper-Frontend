import { Component } from '@angular/core';
import { faPlaneDeparture} from '@fortawesome/free-solid-svg-icons';

import { PersonalisationPopupComponent } from '../personalisation-popup/personalisation-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { FormDataService } from '../../form-data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  
  constructor( private dialogRef: MatDialog ,public formDataService: FormDataService) {}
  openDialog(): void {
    this.dialogRef.open(PersonalisationPopupComponent);
  }


}
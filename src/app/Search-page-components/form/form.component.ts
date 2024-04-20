import { Component } from '@angular/core';
import { PersonalisationPopupComponent } from '../personalisation-popup/personalisation-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { FormDataService } from '../../Services/form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  errorDepartureMessage: string = '';
  errorDestinationMessage: string = '';
  errorDateMessage: string = '';

  constructor(private dialogRef: MatDialog, public formDataService: FormDataService) {}

  openDialog(): void {
      // Reset error messages
      this.errorDepartureMessage = '';
      this.errorDestinationMessage = '';
      this.errorDateMessage = '';


      if (this.formDataService.formData.tripType === 'aller-simple') {
        if (this.formDataService.formData.from === '') {
          this.errorDepartureMessage = 'Please fill departure fields !!';
        } else if (this.formDataService.formData.to === '') {
          this.errorDestinationMessage = 'Please fill destination fields !!';
        } else if (!this.formDataService.formData.startDateOneWay) {
          this.errorDateMessage = 'Please fill date fields !!';
        } else {
          this.dialogRef.open(PersonalisationPopupComponent);
        }
      } else if (this.formDataService.formData.tripType === 'aller-retour') {
        if (this.formDataService.formData.from === '') {
          this.errorDepartureMessage = 'Please fill departure fields !!';
        } else if (this.formDataService.formData.to === '') {
          this.errorDestinationMessage = 'Please fill destination fields !!';
        } else if (!this.formDataService.formData.startDateRoundTrip) {
          this.errorDateMessage = 'Please fill dates fields !!';
        } else if (!this.formDataService.formData.endDateValueRoundTrip) {
          this.errorDateMessage = 'Please fill dates fields !!';
        } else {
          const dialogRef = this.dialogRef.open(PersonalisationPopupComponent);
          dialogRef.afterClosed().subscribe(result => {
            console.log('The popup was closed');
            this.formDataService.resetFormData();
          });
        }
      }
  }
}
  
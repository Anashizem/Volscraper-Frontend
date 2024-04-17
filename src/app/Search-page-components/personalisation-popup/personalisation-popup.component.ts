import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormDataService } from '../../form-data.service';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-personalisation-popup',
  templateUrl: './personalisation-popup.component.html',
  styleUrl: './personalisation-popup.component.css'
})
export class PersonalisationPopupComponent {
  constructor(private http: HttpClient,public formDataService: FormDataService) { }
  formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${day}/${month}/${year}`;
  }
  onSkipOrPopupSubmit() {
    let dataToSend: any = {
      tripType: this.formDataService.formData.tripType,
      from: this.formDataService.formData.from,
      to: this.formDataService.formData.to,
    };
  
    if (this.formDataService.formData.tripType === 'aller-retour') {
      dataToSend.startDateRoundTrip = this.formatDate(this.formDataService.formData.startDateRoundTrip);
      dataToSend.endDateValueRoundTrip = this.formatDate(this.formDataService.formData.endDateValueRoundTrip);
    } else if (this.formDataService.formData.tripType === 'aller-simple') {
      dataToSend.startDateOneWay = this.formatDate(this.formDataService.formData.startDateOneWay);
    }
    this.http.post<any>('http://localhost:5000/api/search_flights', dataToSend)
      .subscribe(
        response => {
          console.log('Scraping launched!', response);
        },
        error => {
          console.error(error);
        }
      );
  }
}
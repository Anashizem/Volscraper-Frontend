import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  formData: any = {
    tripType: 'aller-retour',
    from: '',
    to: '',
    startDateOneWay: new Date(),
    startDateRoundTrip: new Date(),
    endDateValueRoundTrip: new Date()
  };
  onTripTypeChange(event: any) {
    this.formData.tripType = event.target.value;
  }
  onDateRangeChange(event: any) {
    const dates = event.value;
    this.formData.startDateRoundTrip = dates[0];
    this.formData.endDateValueRoundTrip = dates[1];
  }
  onDateChange(event: any) {
    this.formData.startDateOneWay = event.value;
  }
  
  

  constructor() { }
}
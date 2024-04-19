import { Component } from '@angular/core';
import { FormDataService } from '../../Services/form-data.service';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-personalisation-popup',
  templateUrl: './personalisation-popup.component.html',
  styleUrls: ['./personalisation-popup.component.css']
})
export class PersonalisationPopupComponent {
  errorNameMessage: string = '';
  errorEmailMessage: string = '';
  errorCountryMessage: string = '';

  constructor(private http: HttpClient, public formDataService: FormDataService, private router: Router) {}
  
  UserData: any = {};

  // Submit button with popup form
  onPopupSubmit() {
    this.errorNameMessage = '';
    this.errorEmailMessage = '';
    this.errorCountryMessage = '';

    if (!this.UserData.name) {
      this.errorNameMessage = 'Please fill name fields !!';
      return;
    }
    if (!this.UserData.email) {
      this.errorEmailMessage = 'Please fill email fields !!';
      return;
    }
    if (!this.UserData.country) {
      this.errorCountryMessage = 'Please fill country fields !!';
      return;
    }
    let DataToSend: any = {
      tripType: this.formDataService.formData.tripType,
      from: this.formDataService.formData.from,
      to: this.formDataService.formData.to,
    };
    // Vérification et ajout des champs non vides
    if (this.UserData.name) {
      DataToSend.name = this.UserData.name;
    }
    if (this.UserData.email) {
      DataToSend.email = this.UserData.email;
    }
    if (this.UserData.country) {
      DataToSend.country = this.UserData.country;
    }
    if (this.formDataService.formData.tripType === 'aller-retour') {
      DataToSend.startDateRoundTrip = this.formatDate(this.formDataService.formData.startDateRoundTrip);
      DataToSend.endDateValueRoundTrip = this.formatDate(this.formDataService.formData.endDateValueRoundTrip);
    } else if (this.formDataService.formData.tripType === 'aller-simple') {
      DataToSend.startDateOneWay = this.formatDate(this.formDataService.formData.startDateOneWay);
    }
    this.http.post<any>('http://localhost:5000/api/search_flights', DataToSend)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
  }
  // Skip button without popup form 
  onSkipSubmit() {
  
    let DataToSend: any = {
      tripType: this.formDataService.formData.tripType,
      from: this.formDataService.formData.from,
      to: this.formDataService.formData.to,
    };
    

    if (this.formDataService.formData.tripType === 'aller-retour') {
      DataToSend.startDateRoundTrip = this.formatDate(this.formDataService.formData.startDateRoundTrip);
      DataToSend.endDateValueRoundTrip = this.formatDate(this.formDataService.formData.endDateValueRoundTrip);
    } else if (this.formDataService.formData.tripType === 'aller-simple') {
      DataToSend.startDateOneWay = this.formatDate(this.formDataService.formData.startDateOneWay);
    }
    this.router.navigateByUrl('/load-page');
    this.http.post<any>('http://localhost:5000/api/search_flights', DataToSend)
      .subscribe(
        response => {
          console.log(response);
          
        },
        error => {
          console.error(error);
          // Gérer ici la logique appropriée en cas d'erreur
        }
      );
  }
  // Fonction pour formater la date
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${day}/${month}/${year}`;
  }
}

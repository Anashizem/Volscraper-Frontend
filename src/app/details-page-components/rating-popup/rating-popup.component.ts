import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rating-popup',
  templateUrl: './rating-popup.component.html',
  styleUrls: ['./rating-popup.component.css']
})
export class RatingPopupComponent {
  stars: number = 2; // Valeur par défaut à 2 pour l'étoile sélectionnée par défaut
  message: string = '';

  constructor(private http: HttpClient) {}

  submitRating() {
    const ratingData = {
      stars: this.stars,
      message: this.message
    };

    this.http.post<any>('http://localhost:8085/api/ratings', ratingData)
      .subscribe(response => {
        console.log('Rating submitted successfully:', response);
      }, error => {
        console.error('Error submitting rating:', error);
      });
  }
}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  faSearch,
  faPlane,
  faUsers,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-top-widgets',
  templateUrl: './dashboard-top-widgets.component.html',
  styleUrls: ['./dashboard-top-widgets.component.scss'] // La propriété styleUrls est utilisée pour spécifier les fichiers de style SCSS
})
export class DashboardTopWidgetsComponent implements OnInit { // Implémentation de l'interface OnInit

  faSearch = faSearch;
  faPlane = faPlane;
  faUsers = faUsers;
  faHandshake = faHandshake;
  numberOfFlights: number = 0;
  numberOfSearchs: number = 0;
  numberOfUsers :number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:8085/flights/GetAll').subscribe(
      (response) => {
        // Utilisez this.numberOfFlights pour affecter la valeur à la propriété de classe
        this.numberOfFlights = response.length;
        console.log('Number of flights:', this.numberOfFlights);
      },
      (error) => {
        console.error('Error fetching flights:', error);
      }
    );
    this.http.get<any>('http://localhost:8085/searchs/GetAll').subscribe(
      (response) => {
        this.numberOfSearchs = response.length;
        console.log('Number of searchs:', this.numberOfSearchs);
      },
      (error) => {
        console.error('Error fetching searchs:', error);
      }
    );
    this.http.get<any>('http://localhost:8085/Users/GetAllUsers').subscribe(
      (response) => {
       
        this.numberOfUsers = response.length;
        console.log('Number of Users:', this.numberOfUsers);
      },
      (error) => {
        console.error('Error fetching Users:', error);
      }
    );
  }
}
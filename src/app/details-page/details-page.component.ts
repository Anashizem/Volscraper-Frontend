// details-page.component.ts
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../Services/flight.service';

// Interface pour la structure des données de vol
interface FlightData {
  id: string;
  demande_id: string;
  agence: string;
  outward_departure_place: string;
  outward_arrival_place: string;
  outward_price: string;
  outward_time: string;
  duration_outward: string;
  outward_date: string;
  return_departure_place: string;
  return_arrival_place: string;
  return_price: string;
  return_time: string;
  duration_return: string;
  return_date: string;
  url_of_vol: string;
}

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  // Initialisation de flight avec une valeur par défaut
  flights: FlightData[] = []; // Modifier pour stocker tous les vols

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights() {
    this.flightService.getFlightsById().subscribe(
      (data: FlightData[]) => {
        this.flights = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors du chargement des vols : ', error);
      }
    );
  }
}
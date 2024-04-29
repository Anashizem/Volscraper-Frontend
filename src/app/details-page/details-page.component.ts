// details-page.component.ts
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../Services/flight.service';
import { Router } from '@angular/router'; 
import { MatDialog } from '@angular/material/dialog';
import { RatingPopupComponent} from '../details-page-components/rating-popup/rating-popup.component'
import { PersonalisationPopupComponent } from '../Search-page-components/personalisation-popup/personalisation-popup.component';
import { FormStateService  } from "../Services/form-state.service";
// Interface pour la structure des données de vol avec les prix en nombre
interface FlightData {
  id: string;
  demande_id: string;
  agence: string;
  outward_departure_place: string;
  outward_arrival_place: string;
  outward_departure_place_abr: string;
  outward_arrival_place_abr: string;
  outward_price: string;
  outward_departure_time: string;
  outward_arrival_time: string;
  duration_outward: string;
  outward_date: string;
  return_departure_place: string;
  return_arrival_place: string;
  return_departure_place_abr: string;
  return_arrival_place_abr: string;
  return_price: string;
  return_departure_time: string;
  return_arrival_time: string;
  duration_return: string;
  return_date: string;
  url_of_vol: string;
  // Propriétés pour les prix en nombre
  outward_price_numeric: number;
  return_price_numeric: number;
}

// Interface pour la structure des données de recherche
interface SearchData {
  id: string;
  user_id: string;
  tripType: string;
  from: string;
  to: string;
  startDateRoundTrip: string;
  endDateValueRoundTrip: string;
  startDateOneWay: string;
}

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  // Initialisation de flight avec une valeur par défaut
  flights: FlightData[] = [];
  search: SearchData | null = null;
  cheapestFlight: FlightData | undefined;

  constructor(private dialogRef: MatDialog , private flightService: FlightService, private router: Router, private formStateService: FormStateService) { }

  ngOnInit(): void {
    this.loadFlights();
    this.loadLatestSearch();
    this.findCheapestFlight();
    this.findMostExpensiveFlight();
  }

  loadFlights() {
    this.flightService.getFlightsById().subscribe(
      (data: FlightData[]) => {
        this.flights = data.map(flight => ({
          ...flight,
          outward_price_numeric: parseFloat(flight.outward_price),
          return_price_numeric: parseFloat(flight.return_price)
        }));
        this.findCheapestFlight();
        this.findMostExpensiveFlight();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors du chargement des vols : ', error);
      }
    );
  }

  loadLatestSearch() {
    this.flightService.getLatestSearch().subscribe(
      (data: SearchData) => {
        this.search = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors du chargement de recherche : ', error);
      }
    );
  }

  modifiySearch(){
    this.router.navigateByUrl('/search-page');
  }
  
  bookingFlight(url: string) {
    window.open(url, "_blank"); 
  }

  calculateTotalPrice(flight: FlightData): number {
    let totalPrice = flight.outward_price_numeric;
    if (this.search?.tripType === 'aller-retour') {
      totalPrice += flight.return_price_numeric;
    }
    return parseFloat(totalPrice.toFixed(3));
  }

  findCheapestFlight(): void {
    this.cheapestFlight = this.flights.reduce((prev, current) => {
      const prevTotalPrice = this.calculateTotalPrice(prev);
      const currentTotalPrice = this.calculateTotalPrice(current);
      return prevTotalPrice < currentTotalPrice ? prev : current;
    });
    console.log('Vol le moins cher :', this.cheapestFlight);
  }
  findMostExpensiveFlight(): FlightData | undefined {
    if (this.flights.length === 0) return undefined;
    const mostExpensiveFlight = this.flights.reduce((prev, current) => {
      const prevTotalPrice = this.calculateTotalPrice(prev);
      const currentTotalPrice = this.calculateTotalPrice(current);
      return prevTotalPrice > currentTotalPrice ? prev : current;
    });
    console.log('Vol le plus cher :', mostExpensiveFlight);
    return mostExpensiveFlight;
  }
  OnClickFeedback() {
    if (this.formStateService.getFormSubmitted()) {
      this.dialogRef.open(RatingPopupComponent);
    }
  }
}

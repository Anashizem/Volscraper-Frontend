import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl = 'http://localhost:8084'; 

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les vols depuis le backend
  getAllFlights(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/flights`);
  }

}
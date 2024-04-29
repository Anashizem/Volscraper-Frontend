import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  private baseUrl = 'http://localhost:8085'; 

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les vols depuis le backend
  getAllRatings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/ratings/GetAll`);
}
}
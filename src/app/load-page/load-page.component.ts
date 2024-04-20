import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { Router } from '@angular/router'; // Importez le Router ici

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styles: ``
})
export class LoadPageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.checkScrapingStatus();
  }

  checkScrapingStatus() {
    interval(5000).subscribe(() => { // Vérifie l'état du scraping toutes les 5 secondes
      this.http.get<any>('http://localhost:5000/api/scraping_status').subscribe(
        (response) => {
          console.log('Scraping status:', response.status);
          if (response.status === 'scraping_finished') {
            console.log('Le scraping est terminé.');
            this.router.navigateByUrl('/details');
          }
          else if (response.status === 'scraping_in_progress') {
            console.log("Le scraping n'est pas encore terminé.");
          }

        },
        (error) => {
          console.error('Error checking scraping status:', error);
        }
      );
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval , Subscription} from 'rxjs';
import { Router } from '@angular/router'; // Importez le Router ici

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styles: ``
})
export class LoadPageComponent implements OnInit {

  private scrapingStatusSubscription!: Subscription; // Déclarez la variable de type Subscription

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.checkScrapingStatus();
  }

checkScrapingStatus() {
    this.scrapingStatusSubscription = interval(5000).subscribe(() => {
      this.http.get<any>('http://localhost:5000/api/scraping_status').subscribe(
        (response) => {
          console.log('Scraping status:', response.status);
          if (response.status === 'scraping_finished') {
            console.log('Le scraping est terminé.');
            this.router.navigateByUrl('/details');
            this.scrapingStatusSubscription.unsubscribe(); // Arrête l'envoi de requêtes GET
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

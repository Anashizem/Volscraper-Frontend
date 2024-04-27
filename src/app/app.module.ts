import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FormComponent } from './Search-page-components/form/form.component';
import { DateRangePickerModule, DatePickerModule } from '@syncfusion/ej2-angular-calendars'; // Ajout de la virgule manquante et du point-virgule manquant
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PartnersComponent } from './Search-page-components/partners/partners.component';
import { AdvantageComponent } from './Search-page-components/advantage/advantage.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LoadPageComponent } from './load-page/load-page.component';
import { PersonalisationPopupComponent } from './Search-page-components/personalisation-popup/personalisation-popup.component';
import { RatingPopupComponent } from './details-page-components/rating-popup/rating-popup.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { MatCardModule} from '@angular/material/card'
import { NgChartsModule } from 'ng2-charts';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MeetOurTeamComponent } from './Search-page-components/meet-our-team/meet-our-team.component';
import { TravelwingsfooterComponent } from './Search-page-components/travelwingsfooter/travelwingsfooter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SearchPageComponent,
    FormComponent,
    PartnersComponent,
    AdvantageComponent,
    LoadPageComponent,
    PersonalisationPopupComponent,
    RatingPopupComponent,
    DetailsPageComponent,
    MeetOurTeamComponent,
    TravelwingsfooterComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatePickerModule,
    DateRangePickerModule,
    FormsModule,
    FontAwesomeModule,
    MatCardModule,
    SocketIoModule.forRoot(config),
    NgChartsModule,
    MatPaginator,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()) // Add withFetch() here
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

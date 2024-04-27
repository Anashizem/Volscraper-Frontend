import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FormComponent } from './Search-page-components/form/form.component';
import { PartnersComponent } from './Search-page-components/partners/partners.component';
import { AdvantageComponent } from './Search-page-components/advantage/advantage.component';
import { LoadPageComponent } from './load-page/load-page.component';
import { PersonalisationPopupComponent } from './Search-page-components/personalisation-popup/personalisation-popup.component';
import { RatingPopupComponent} from './details-page-components/rating-popup/rating-popup.component'
import { DetailsPageComponent} from './details-page/details-page.component'
import { MeetOurTeamComponent } from './Search-page-components/meet-our-team/meet-our-team.component';
import { TravelwingsfooterComponent } from './Search-page-components/travelwingsfooter/travelwingsfooter.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  { path: 'search-page', component: SearchPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'form', component: FormComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'advantage', component: AdvantageComponent },
  { path: 'meetourteam', component: MeetOurTeamComponent },
  { path: 'footer', component: TravelwingsfooterComponent },
  { path: 'load-page', component: LoadPageComponent },
  { path : 'personalisation',component: PersonalisationPopupComponent},
  { path : 'rating',component: RatingPopupComponent},
  { path : 'details',component: DetailsPageComponent},
  { path : 'user',component: UsersListComponent},
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: '**', redirectTo: 'home-page' }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

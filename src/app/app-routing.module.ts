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
import { UsersListComponent } from './dashbord/dashboard-components/users-list/users-list.component';
import { DashboardHeaderComponent } from './dashbord/dashboard-components/dashboard-header/dashboard-header.component';
import { DashboardSideNavComponent } from './dashbord/dashboard-components/dashboard-side-nav/dashboard-side-nav.component';
import { DashboardMainComponent } from './dashbord/dashboard-components/dashboard-main1/dashboard-main.component';
import { DashboardTopWidgetsComponent } from './dashbord/dashboard-components/dashboard-top-widgets/dashboard-top-widgets.component';
import { DashboardMostCountrySearchedComponent } from './dashbord/dashboard-components/dashboard-most-country-searched/dashboard-most-country-searched.component';
import { UserOriginCountryPercentagesComponent } from './dashbord/dashboard-components/user-origin-country-percentages/user-origin-country-percentages.component';
import { Main2Component } from './dashbord/dashboard-components/dashboard-main2/main2.component';
import { DashboardReviewsComponent } from './dashbord/dashboard-reviews/dashboard-reviews.component';
import { DashboardStaticComponent } from './dashbord/dashboard-static/dashboard-static.component';
import { DashbordUsersComponent } from './dashbord/dashbord-users/dashbord-users.component';
// import { CountryOrdersComponent} from './dashbord/dashboard-components/country-orders/country-orders.component'
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
  { path : 'dashboard-header',component: DashboardHeaderComponent},
  { path : 'dashboard-side-nav',component: DashboardSideNavComponent},
  { path : 'dashboard-main',component: DashboardMainComponent},
  { path : 'dashboard-topwidgets',component: DashboardTopWidgetsComponent},
  { path : 'dashboard-chart1',component: DashboardMostCountrySearchedComponent},
  { path : 'User-Origin-Country-Percentages',component:UserOriginCountryPercentagesComponent},
  { path : 'reviews',component: Main2Component},
  { path : 'dashboard-static',component: DashboardStaticComponent},
  { path : 'dashboard-users',component: DashbordUsersComponent},
  { path : 'dashboard-reviews',component: DashboardReviewsComponent},
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: '**', redirectTo: 'home-page' }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

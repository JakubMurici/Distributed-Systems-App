import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarListComponent } from './car-list/car-list.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { YachtListComponent } from './yacht-list/yacht-list.component';
import { AuthGuard } from './services/auth.guard';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'menu', component: WelcomePageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cars', component: CarListComponent, canActivate: [AuthGuard]},
  { path: 'bikes', component: BikeListComponent, canActivate: [AuthGuard]},
  { path: 'contacts', component: ContactComponent, canActivate: [AuthGuard]},
  { path: 'yachts', component: YachtListComponent, canActivate: [AuthGuard]},
  { path: 'checkout/:id/:name/:description/:price', component: CheckoutComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

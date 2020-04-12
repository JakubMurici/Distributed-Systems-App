import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CarListComponent} from './car-list/car-list.component';
import {BikeListComponent} from './bike-list/bike-list.component';
import {YachtListComponent} from './yacht-list/yacht-list.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'cars', component: CarListComponent},
  { path: 'bikes', component: BikeListComponent},
  { path: 'yachts', component: YachtListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

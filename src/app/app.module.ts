import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { MenuComponent } from './menu/menu.component';
import { CarListComponent } from './car-list/car-list.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { YachtListComponent } from './yacht-list/yacht-list.component';

import { CarService} from './services/car.service';
import { YachtService} from './services/yacht.service';
import { BikeService} from './services/bike.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CarListComponent,
    BikeListComponent,
    YachtListComponent,
    WelcomePageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'AWS-TEST'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAAEE7dUF740uFCPLtoaAtKiK4GG0mfOkg'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

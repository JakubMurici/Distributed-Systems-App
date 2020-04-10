import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  courses: any[];

  constructor(public auth: AuthService) {

    // db: AngularFireDatabase     goes to the constructor
  /*  db.list('courses').valueChanges()
      .subscribe(courses => {  this.courses = courses; console.log(this.courses); }); */


  }

  ngOnInit() {
  }

}

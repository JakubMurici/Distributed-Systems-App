import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  courses: any[];

  constructor(db: AngularFireDatabase) {
    db.list('courses').valueChanges()
      .subscribe(courses => {  this.courses = courses; console.log(this.courses); });
  }

  ngOnInit() {
  }

}

import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  courses: any[];
  subscription: Subscription

  constructor(db: AngularFireDatabase){
    this.subscription = db.list('/courses').subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userDoc: any;

  constructor(private fireStore: AngularFirestore) {
    this.userDoc = fireStore.doc<any>('userProfile');
  }

}

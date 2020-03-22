import { Component } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from "@ionic/angular";
import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  userDoc: any;
  email;
  password;

  constructor(
    private fireStore: AngularFirestore,
    public NavCtrl: NavController,
    public authService: AuthService
  ) {
    fireStore
      .collection("UserDetails")
      .valueChanges()
      .subscribe(data => {
        this.userDoc = data;
      });
  }

  login() {
    console.log(this.email + this.password);
  }

}

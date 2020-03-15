import { Component } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  userDoc: any;

  constructor(
    private fireStore: AngularFirestore,
    public NavCtrl: NavController
  ) {
    fireStore
      .collection("test")
      .valueChanges()
      .subscribe(data => {
        this.userDoc = data;
      });
  }

  toSignUp1() {
    this.NavCtrl.navigateForward("/sign-up");
  }
}

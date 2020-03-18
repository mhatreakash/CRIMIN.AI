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
  username : string = ""
  password : string = ""

  constructor(
    private fireStore: AngularFirestore,
    public NavCtrl: NavController
  ) {
    fireStore
      .collection("UserDetails")
      .valueChanges()
      .subscribe(data => {
        this.userDoc = data;
      });
  }

  
}

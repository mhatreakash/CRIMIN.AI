import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AuthService } from "../services/auth.service";

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
    public NavCtrl: NavController,
    public authService: AuthService
  ) {
  
  }

  login() {
    console.log(this.email + this.password);
  }
}

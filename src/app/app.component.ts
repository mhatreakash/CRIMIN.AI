import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from "@ionic/angular";

class User {
  constructor(public name) { }
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastController: ToastController,
    public NavCtrl: NavController
  ) 
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  // spotRagging() {
  //   this.NavCtrl.navigateForward("/spot-ragging");
  //   this.showToast("Sport Ragging clicked");
  // }

  // prevention() {
    
  //   this.NavCtrl.navigateForward("/preventions");
  //   this.showToast("Prevention clicked");
  // }

  // dashboard(){
  //   this.NavCtrl.navigateForward("/dashboard");
  //   this.showToast("Dashboard clicked");
  // }

  async showToast(message) {
    const toast = await this.toastController.create({
      color: "medium",
      message: message,
      duration: 700
    });
    toast.present();
  }
}

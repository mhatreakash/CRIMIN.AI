import { Component } from '@angular/core';


import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    private toastController: ToastController
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


  spotRagging() {
    this.showToast("Sport Ragging clicked");
  }

  prevention() {
    this.showToast("Prevention clicked");
  }

  async showToast(message) {
    const toast = await this.toastController.create({
      color: "warning",
      message: message,
      duration: 700
    });
    toast.present();
  }
}

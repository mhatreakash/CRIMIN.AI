import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router: Router, public NavCtrl: NavController) { }

  ngOnInit() {
  }

  EditProfile() {
    this.NavCtrl.navigateForward("/edit-profile");
  }

  ChangePassword() {
    this.NavCtrl.navigateForward("/change-password");
  }

}

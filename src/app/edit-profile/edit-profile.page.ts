import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(public action : ActionSheetController,public alertController :AlertController) { }

  async ActionSheet() {
    const actionSheet = await this.action.create({
      header: 'Albums',
      buttons: [{
        text: 'Gallery',
        icon:"image",
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
   }
 


  ngOnInit() {
  }

}

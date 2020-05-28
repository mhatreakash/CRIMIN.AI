import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventionsPageRoutingModule } from './preventions-routing.module';

import { PreventionsPage } from './preventions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreventionsPageRoutingModule
  ],
  declarations: [PreventionsPage]
})
export class PreventionsPageModule {}

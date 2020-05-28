import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotRaggingPageRoutingModule } from './spot-ragging-routing.module';

import { SpotRaggingPage } from './spot-ragging.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpotRaggingPageRoutingModule
  ],
  declarations: [SpotRaggingPage]
})
export class SpotRaggingPageModule {}

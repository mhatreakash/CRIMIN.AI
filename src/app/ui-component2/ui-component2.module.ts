import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiComponent2PageRoutingModule } from './ui-component2-routing.module';

import { UiComponent2Page } from './ui-component2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiComponent2PageRoutingModule
  ],
  declarations: [UiComponent2Page]
})
export class UiComponent2PageModule {}

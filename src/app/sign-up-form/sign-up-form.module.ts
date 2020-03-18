import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpFormPageRoutingModule } from './sign-up-form-routing.module';

import { SignUpFormPage } from './sign-up-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpFormPageRoutingModule
  ],
  declarations: [SignUpFormPage]
})
export class SignUpFormPageModule {}

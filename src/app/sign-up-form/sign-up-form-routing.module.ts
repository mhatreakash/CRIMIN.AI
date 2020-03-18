import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpFormPage } from './sign-up-form.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpFormPageRoutingModule {}

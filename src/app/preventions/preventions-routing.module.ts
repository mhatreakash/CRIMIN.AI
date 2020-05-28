import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventionsPage } from './preventions.page';

const routes: Routes = [
  {
    path: '',
    component: PreventionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreventionsPageRoutingModule {}

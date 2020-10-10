import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateWeaponPage } from './update-weapon.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateWeaponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateWeaponPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateWeaponPageRoutingModule } from './update-weapon-routing.module';

import { UpdateWeaponPage } from './update-weapon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateWeaponPageRoutingModule
  ],
  declarations: [UpdateWeaponPage]
})
export class UpdateWeaponPageModule {}

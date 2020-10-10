import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeaponService } from '../services/weapon.service';

@Component({
  selector: 'app-update-weapon',
  templateUrl: './update-weapon.page.html',
  styleUrls: ['./update-weapon.page.scss'],
})
export class UpdateWeaponPage implements OnInit {

  updateForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private weaponService: WeaponService,
    private router: Router) {
    this.updateForm = this.fb.group({
      material: [''],
      might: [''],
      weaponRange: [''],
      type: [''],
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.updateForm.valid) {
      return false;
    } else {
      let weapon = {
        id: null,
        material: this.updateForm.value.material,
        might: this.updateForm.value.might,
        weaponRange: this.updateForm.value.weaponRange,
        type: this.updateForm.value.type
      }
      this.weaponService.addWeapon(weapon)
        .subscribe((res) => {
          this.router.navigateByUrl("/list");
        });
    }
  }

}

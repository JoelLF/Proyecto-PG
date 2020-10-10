import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeaponService } from '../services/weapon.service';

@Component({
  selector: 'app-add-weapon',
  templateUrl: './add-weapon.page.html',
  styleUrls: ['./add-weapon.page.scss'],
})
export class AddWeaponPage implements OnInit {

  weaponForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private weaponService: WeaponService,
    private router: Router) {
    this.weaponForm = this.fb.group({
      material: [''],
      might: [''],
      weaponRange: [''],
      type: [''],
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.weaponForm.valid) {
      return false;
    } else {
      let weapon = {
        id: null,
        material: this.weaponForm.value.material,
        might: this.weaponForm.value.might,
        weaponRange: this.weaponForm.value.weaponRange,
        type: this.weaponForm.value.type
      }
      this.weaponService.addWeapon(weapon)
        .subscribe((res) => {
          this.router.navigateByUrl("/list");
        });
    }
  }

}

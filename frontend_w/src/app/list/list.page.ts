import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Weapon } from '../models/weapon';
import { WeaponService } from '../services/weapon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  weapons: Weapon[];

  constructor(private weaponService: WeaponService, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getAllWeapons();
  }

  getAllWeapons(){
    this.weaponService.getWeapons().subscribe( weapons => {
      this.weapons = weapons;
      console.log(weapons);
    });

  }
  
  deleteWeapon(id: number){
    this.weaponService.deleteWeapon(id).subscribe( () => {
      this.getAllWeapons();
    })
  }

  insertWeapon(){
    this.router.navigateByUrl("/add-weapon");
  }

  updateWeapon(id: number){
    this.router.navigateByUrl("/update-weapon");
  }

}

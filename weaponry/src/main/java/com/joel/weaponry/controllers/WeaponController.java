package com.joel.weaponry.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joel.weaponry.models.Weapon;
import com.joel.weaponry.services.IWeaponService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class WeaponController {
	
	@Autowired
	IWeaponService weaponService;
	// Here are the end-points

	@GetMapping("/api/weapons")
	private List<Weapon> getAll(){
		return weaponService.getAll();
	}
	
	@GetMapping("/api/weapons/{id}")
	private Weapon findById(@PathVariable(value = "id") int id) {
		return null;
	}
	
	@PostMapping("/api/weapons")
	private void addWeapon(Weapon weapon) {
		weaponService.addWeapon(weapon);
	}
	
	@DeleteMapping("/api/weapons/{id}")
	private void deleteWeapon(@PathVariable(value = "id") int id) {
		weaponService.deleteWeapon(id);
	}
	
	@PutMapping("/api/weapons/{id}")
	private void updateWeapon(@PathVariable(value = "id") int id, Weapon weapon) {
		System.out.println("Hola");
		System.out.println(id);
		System.out.println(weapon.getRange());
		System.out.println(weapon.getMaterial());
		System.out.println(weapon.getMight());
		System.out.println(weapon.getType());
		weaponService.updateWeapon(id, weapon);
	}
}

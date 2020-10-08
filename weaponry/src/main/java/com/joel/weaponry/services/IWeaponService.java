package com.joel.weaponry.services;

import java.util.List;

import com.joel.weaponry.models.Weapon;

public interface IWeaponService {

	public List<Weapon> getAll();

	public void addWeapon(Weapon weapon);

	public void deleteWeapon(int id);
	
	public void updateWeapon(int id, Weapon weapon);

}

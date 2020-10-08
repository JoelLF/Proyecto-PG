package com.joel.weaponry.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joel.weaponry.dao.IWeaponDao;
import com.joel.weaponry.models.Weapon;

@Service
public class WeaponServiceImpl implements IWeaponService{

	@Autowired
	IWeaponDao weaponDao;
	
	@Override
	public List<Weapon> getAll() {
		return (List<Weapon>) weaponDao.findAll();	
	}
	
	@Override
	public void addWeapon(Weapon weapon) {
		weaponDao.save(weapon);
	}
	
	@Override
	public void deleteWeapon(int id) {
		weaponDao.deleteById(id);
	}
	
	@Override
	public void updateWeapon(int id, Weapon weapon) {
		System.out.println("Antes");
		Optional<Weapon> w = weaponDao.findById(id);
		System.out.println("Después");
		System.out.println(weapon.getRange());
		System.out.println(weapon.getMaterial());
		System.out.println(weapon.getMight());
		System.out.println(weapon.getType());
		
		if (w.isPresent()) {
			System.out.println("Antes if");
			weapon.setId(id);
			weaponDao.save(weapon);
			System.out.println("Después if");
		}
	}
}
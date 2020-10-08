package com.joel.weaponry.dao;

import org.springframework.data.repository.CrudRepository;

import com.joel.weaponry.models.Weapon;

public interface IWeaponDao extends CrudRepository<Weapon, Integer>{

}

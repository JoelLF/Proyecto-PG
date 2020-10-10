import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Weapon } from '../models/weapon';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

const apiUrl = 'http://localhost:8080/api/weapons';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(private http: HttpClient) { }

  getWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(apiUrl);
  };

  deleteWeapon(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addWeapon(weapon: Weapon): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("material", weapon.material);
    bodyEncoded.append("might", weapon.might.toString());
    bodyEncoded.append("range", weapon.weaponRange.toString());
    bodyEncoded.append("type", weapon.type);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateWeapon(weapon: Weapon): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("material", weapon.material);
    bodyEncoded.append("might", weapon.might.toString());
    bodyEncoded.append("range", weapon.weaponRange.toString());
    bodyEncoded.append("type", weapon.type);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

}






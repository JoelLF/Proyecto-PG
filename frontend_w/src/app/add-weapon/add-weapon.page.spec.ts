import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWeaponPage } from './add-weapon.page';

describe('AddWeaponPage', () => {
  let component: AddWeaponPage;
  let fixture: ComponentFixture<AddWeaponPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWeaponPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWeaponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

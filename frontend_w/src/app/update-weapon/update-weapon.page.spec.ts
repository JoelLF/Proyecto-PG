import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateWeaponPage } from './update-weapon.page';

describe('UpdateWeaponPage', () => {
  let component: UpdateWeaponPage;
  let fixture: ComponentFixture<UpdateWeaponPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWeaponPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateWeaponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

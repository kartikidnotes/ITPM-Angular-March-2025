import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotelroombookingprojectbinding } from './hotelroombookingprojectbinding';

describe('Hotelroombookingprojectbinding', () => {
  let component: Hotelroombookingprojectbinding;
  let fixture: ComponentFixture<Hotelroombookingprojectbinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hotelroombookingprojectbinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hotelroombookingprojectbinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

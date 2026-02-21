import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulationexampletwo } from './encapsulationexampletwo';

describe('Encapsulationexampletwo', () => {
  let component: Encapsulationexampletwo;
  let fixture: ComponentFixture<Encapsulationexampletwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encapsulationexampletwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulationexampletwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulationexamplefour } from './encapsulationexamplefour';

describe('Encapsulationexamplefour', () => {
  let component: Encapsulationexamplefour;
  let fixture: ComponentFixture<Encapsulationexamplefour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encapsulationexamplefour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulationexamplefour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

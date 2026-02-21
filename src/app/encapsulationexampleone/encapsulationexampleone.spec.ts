import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulationexampleone } from './encapsulationexampleone';

describe('Encapsulationexampleone', () => {
  let component: Encapsulationexampleone;
  let fixture: ComponentFixture<Encapsulationexampleone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encapsulationexampleone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulationexampleone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

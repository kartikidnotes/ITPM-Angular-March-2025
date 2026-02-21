import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulationexamplefive } from './encapsulationexamplefive';

describe('Encapsulationexamplefive', () => {
  let component: Encapsulationexamplefive;
  let fixture: ComponentFixture<Encapsulationexamplefive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encapsulationexamplefive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulationexamplefive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

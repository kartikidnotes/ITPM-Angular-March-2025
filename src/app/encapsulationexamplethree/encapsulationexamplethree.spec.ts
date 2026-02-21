import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulationexamplethree } from './encapsulationexamplethree';

describe('Encapsulationexamplethree', () => {
  let component: Encapsulationexamplethree;
  let fixture: ComponentFixture<Encapsulationexamplethree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encapsulationexamplethree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulationexamplethree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

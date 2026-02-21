import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulationexampleseven } from './encapsulationexampleseven';

describe('Encapsulationexampleseven', () => {
  let component: Encapsulationexampleseven;
  let fixture: ComponentFixture<Encapsulationexampleseven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encapsulationexampleseven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulationexampleseven);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

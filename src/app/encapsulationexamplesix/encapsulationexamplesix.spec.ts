import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulationexamplesix } from './encapsulationexamplesix';

describe('Encapsulationexamplesix', () => {
  let component: Encapsulationexamplesix;
  let fixture: ComponentFixture<Encapsulationexamplesix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encapsulationexamplesix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulationexamplesix);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

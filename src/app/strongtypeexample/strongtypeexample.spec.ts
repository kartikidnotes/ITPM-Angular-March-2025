import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strongtypeexample } from './strongtypeexample';

describe('Strongtypeexample', () => {
  let component: Strongtypeexample;
  let fixture: ComponentFixture<Strongtypeexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strongtypeexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Strongtypeexample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interfacethree } from './interfacethree';

describe('Interfacethree', () => {
  let component: Interfacethree;
  let fixture: ComponentFixture<Interfacethree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interfacethree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interfacethree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

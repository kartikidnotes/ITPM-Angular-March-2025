import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentdirective } from './componentdirective';

describe('Componentdirective', () => {
  let component: Componentdirective;
  let fixture: ComponentFixture<Componentdirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentdirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentdirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

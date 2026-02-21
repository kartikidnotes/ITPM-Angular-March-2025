import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Standaloneexample } from './standaloneexample';

describe('Standaloneexample', () => {
  let component: Standaloneexample;
  let fixture: ComponentFixture<Standaloneexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Standaloneexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Standaloneexample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

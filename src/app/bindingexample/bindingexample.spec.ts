import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bindingexample } from './bindingexample';

describe('Bindingexample', () => {
  let component: Bindingexample;
  let fixture: ComponentFixture<Bindingexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bindingexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bindingexample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

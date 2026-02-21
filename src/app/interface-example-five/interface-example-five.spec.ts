import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceExampleFive } from './interface-example-five';

describe('InterfaceExampleFive', () => {
  let component: InterfaceExampleFive;
  let fixture: ComponentFixture<InterfaceExampleFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceExampleFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceExampleFive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

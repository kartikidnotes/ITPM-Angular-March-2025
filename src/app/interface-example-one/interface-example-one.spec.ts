import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceExampleOne } from './interface-example-one';

describe('InterfaceExampleOne', () => {
  let component: InterfaceExampleOne;
  let fixture: ComponentFixture<InterfaceExampleOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceExampleOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceExampleOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

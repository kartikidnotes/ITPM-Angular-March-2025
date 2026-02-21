import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceExampleFour } from './interface-example-four';

describe('InterfaceExampleFour', () => {
  let component: InterfaceExampleFour;
  let fixture: ComponentFixture<InterfaceExampleFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceExampleFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceExampleFour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceExampleSix } from './interface-example-six';

describe('InterfaceExampleSix', () => {
  let component: InterfaceExampleSix;
  let fixture: ComponentFixture<InterfaceExampleSix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceExampleSix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceExampleSix);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

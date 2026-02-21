import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceExampleTwo } from './interface-example-two';

describe('InterfaceExampleTwo', () => {
  let component: InterfaceExampleTwo;
  let fixture: ComponentFixture<InterfaceExampleTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceExampleTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceExampleTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

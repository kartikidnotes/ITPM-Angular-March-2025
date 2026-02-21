import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceExample } from './interface-example';

describe('InterfaceExample', () => {
  let component: InterfaceExample;
  let fixture: ComponentFixture<InterfaceExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

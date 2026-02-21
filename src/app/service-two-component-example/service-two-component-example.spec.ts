import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTwoComponentExample } from './service-two-component-example';

describe('ServiceTwoComponentExample', () => {
  let component: ServiceTwoComponentExample;
  let fixture: ComponentFixture<ServiceTwoComponentExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTwoComponentExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTwoComponentExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFourComponentExample } from './service-four-component-example';

describe('ServiceFourComponentExample', () => {
  let component: ServiceFourComponentExample;
  let fixture: ComponentFixture<ServiceFourComponentExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFourComponentExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFourComponentExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

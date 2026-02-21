import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFiveComponentExample } from './service-five-component-example';

describe('ServiceFiveComponentExample', () => {
  let component: ServiceFiveComponentExample;
  let fixture: ComponentFixture<ServiceFiveComponentExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFiveComponentExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFiveComponentExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

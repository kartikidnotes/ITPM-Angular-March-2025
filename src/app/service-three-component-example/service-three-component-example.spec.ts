import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceThreeComponentExample } from './service-three-component-example';

describe('ServiceThreeComponentExample', () => {
  let component: ServiceThreeComponentExample;
  let fixture: ComponentFixture<ServiceThreeComponentExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceThreeComponentExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceThreeComponentExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

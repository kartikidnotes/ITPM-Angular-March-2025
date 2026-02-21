import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOneComponentExample } from './service-one-component-example';

describe('ServiceOneComponentExample', () => {
  let component: ServiceOneComponentExample;
  let fixture: ComponentFixture<ServiceOneComponentExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceOneComponentExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOneComponentExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

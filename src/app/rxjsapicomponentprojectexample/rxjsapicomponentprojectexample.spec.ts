import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjsapicomponentprojectexample } from './rxjsapicomponentprojectexample';

describe('Rxjsapicomponentprojectexample', () => {
  let component: Rxjsapicomponentprojectexample;
  let fixture: ComponentFixture<Rxjsapicomponentprojectexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjsapicomponentprojectexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rxjsapicomponentprojectexample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

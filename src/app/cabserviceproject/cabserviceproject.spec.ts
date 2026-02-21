import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabserviceproject } from './cabserviceproject';

describe('Cabserviceproject', () => {
  let component: Cabserviceproject;
  let fixture: ComponentFixture<Cabserviceproject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabserviceproject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabserviceproject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

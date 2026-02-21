import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sendercomponentdatasharinginservice } from './sendercomponentdatasharinginservice';

describe('Sendercomponentdatasharinginservice', () => {
  let component: Sendercomponentdatasharinginservice;
  let fixture: ComponentFixture<Sendercomponentdatasharinginservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sendercomponentdatasharinginservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sendercomponentdatasharinginservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

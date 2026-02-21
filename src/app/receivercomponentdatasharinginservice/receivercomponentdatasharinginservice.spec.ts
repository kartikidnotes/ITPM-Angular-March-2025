import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receivercomponentdatasharinginservice } from './receivercomponentdatasharinginservice';

describe('Receivercomponentdatasharinginservice', () => {
  let component: Receivercomponentdatasharinginservice;
  let fixture: ComponentFixture<Receivercomponentdatasharinginservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receivercomponentdatasharinginservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receivercomponentdatasharinginservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

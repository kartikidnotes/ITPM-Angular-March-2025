import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userdefinedpipes } from './userdefinedpipes';

describe('Userdefinedpipes', () => {
  let component: Userdefinedpipes;
  let fixture: ComponentFixture<Userdefinedpipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userdefinedpipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userdefinedpipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

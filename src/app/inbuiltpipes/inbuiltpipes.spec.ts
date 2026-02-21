import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inbuiltpipes } from './inbuiltpipes';

describe('Inbuiltpipes', () => {
  let component: Inbuiltpipes;
  let fixture: ComponentFixture<Inbuiltpipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inbuiltpipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inbuiltpipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

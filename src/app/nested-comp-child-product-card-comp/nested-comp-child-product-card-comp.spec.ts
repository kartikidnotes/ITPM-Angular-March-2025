import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCompChildProductCardComp } from './nested-comp-child-product-card-comp';

describe('NestedCompChildProductCardComp', () => {
  let component: NestedCompChildProductCardComp;
  let fixture: ComponentFixture<NestedCompChildProductCardComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedCompChildProductCardComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedCompChildProductCardComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

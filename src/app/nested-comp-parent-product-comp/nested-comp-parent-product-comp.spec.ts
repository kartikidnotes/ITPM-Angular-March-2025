import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCompParentProductComp } from './nested-comp-parent-product-comp';

describe('NestedCompParentProductComp', () => {
  let component: NestedCompParentProductComp;
  let fixture: ComponentFixture<NestedCompParentProductComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedCompParentProductComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedCompParentProductComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

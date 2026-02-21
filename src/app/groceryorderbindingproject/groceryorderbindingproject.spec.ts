import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Groceryorderbindingproject } from './groceryorderbindingproject';

describe('Groceryorderbindingproject', () => {
  let component: Groceryorderbindingproject;
  let fixture: ComponentFixture<Groceryorderbindingproject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Groceryorderbindingproject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Groceryorderbindingproject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

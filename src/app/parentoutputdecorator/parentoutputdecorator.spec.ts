import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentoutputdecorator } from './parentoutputdecorator';

describe('Parentoutputdecorator', () => {
  let component: Parentoutputdecorator;
  let fixture: ComponentFixture<Parentoutputdecorator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parentoutputdecorator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parentoutputdecorator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

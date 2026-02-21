import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childoutputdecorator } from './childoutputdecorator';

describe('Childoutputdecorator', () => {
  let component: Childoutputdecorator;
  let fixture: ComponentFixture<Childoutputdecorator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childoutputdecorator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childoutputdecorator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

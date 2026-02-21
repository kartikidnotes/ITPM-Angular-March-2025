import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsExampleTwo } from './rx-js-example-two';

describe('RxJsExampleTwo', () => {
  let component: RxJsExampleTwo;
  let fixture: ComponentFixture<RxJsExampleTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsExampleTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsExampleTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

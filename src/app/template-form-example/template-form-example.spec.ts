import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormExample } from './template-form-example';

describe('TemplateFormExample', () => {
  let component: TemplateFormExample;
  let fixture: ComponentFixture<TemplateFormExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

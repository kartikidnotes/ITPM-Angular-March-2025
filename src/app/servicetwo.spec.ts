import { TestBed } from '@angular/core/testing';

import { Servicetwo } from './servicetwo';

describe('Servicetwo', () => {
  let service: Servicetwo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicetwo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

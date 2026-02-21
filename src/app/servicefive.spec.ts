import { TestBed } from '@angular/core/testing';

import { Servicefive } from './servicefive';

describe('Servicefive', () => {
  let service: Servicefive;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicefive);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

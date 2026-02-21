import { TestBed } from '@angular/core/testing';

import { Servicefour } from './servicefour';

describe('Servicefour', () => {
  let service: Servicefour;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicefour);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

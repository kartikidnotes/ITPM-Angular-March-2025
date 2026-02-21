import { TestBed } from '@angular/core/testing';

import { Servicethree } from './servicethree';

describe('Servicethree', () => {
  let service: Servicethree;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicethree);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

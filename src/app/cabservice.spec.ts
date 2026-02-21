import { TestBed } from '@angular/core/testing';

import { Cabservice } from './cabservice';

describe('Cabservice', () => {
  let service: Cabservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cabservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

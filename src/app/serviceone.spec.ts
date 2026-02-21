import { TestBed } from '@angular/core/testing';

import { Serviceone } from './serviceone';

describe('Serviceone', () => {
  let service: Serviceone;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceone);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

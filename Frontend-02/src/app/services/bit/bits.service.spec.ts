import { TestBed } from '@angular/core/testing';

import { BitsService } from './bits.service';

describe('BitsService', () => {
  let service: BitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

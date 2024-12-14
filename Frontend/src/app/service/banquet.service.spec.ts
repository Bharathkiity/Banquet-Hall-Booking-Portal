import { TestBed } from '@angular/core/testing';

import { BanquetService } from './banquet.service';

describe('BanquetService', () => {
  let service: BanquetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanquetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

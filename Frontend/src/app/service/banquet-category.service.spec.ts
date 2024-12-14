import { TestBed } from '@angular/core/testing';

import { BanquetCategoryService } from './banquet-category.service';

describe('BanquetCategoryService', () => {
  let service: BanquetCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanquetCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ByCountryService } from './by-country.service';

describe('ByCountryService', () => {
  let service: ByCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

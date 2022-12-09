import { TestBed } from '@angular/core/testing';

import { RegulatoryComplianceService } from './regulatory-compliance.service';

describe('RegulatoryComplianceService', () => {
  let service: RegulatoryComplianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegulatoryComplianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

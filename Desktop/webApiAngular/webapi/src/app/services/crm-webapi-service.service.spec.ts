import { TestBed } from '@angular/core/testing';

import { CrmWebapiServiceService } from './crm-webapi-service.service';

describe('CrmWebapiServiceService', () => {
  let service: CrmWebapiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmWebapiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

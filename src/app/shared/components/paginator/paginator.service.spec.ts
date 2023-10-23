import {TestBed} from '@angular/core/testing';

import {PaginatorService} from './paginator.service';

describe('PaginatorServiceService', () => {
  let service: PaginatorService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

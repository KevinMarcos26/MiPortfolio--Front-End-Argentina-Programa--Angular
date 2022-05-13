import { TestBed } from '@angular/core/testing';

import { TraerInfoService } from './traer-info.service';

describe('TraerInfoService', () => {
  let service: TraerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
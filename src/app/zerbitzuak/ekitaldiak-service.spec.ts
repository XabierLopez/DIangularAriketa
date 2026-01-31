import { TestBed } from '@angular/core/testing';

import { EkitaldiakService } from './ekitaldiak-service';

describe('EkitaldiakService', () => {
  let service: EkitaldiakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkitaldiakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

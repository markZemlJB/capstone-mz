import { TestBed } from '@angular/core/testing';

import { BoothsService } from './booths.service';

describe('BoothsService', () => {
  let service: BoothsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoothsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OnlineFetchingService } from './online-fetching.service';

describe('OnlineFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineFetchingService = TestBed.get(OnlineFetchingService);
    expect(service).toBeTruthy();
  });
});

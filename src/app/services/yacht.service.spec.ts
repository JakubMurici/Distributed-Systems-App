import { TestBed } from '@angular/core/testing';

import { YachtService } from './yacht.service';

describe('YachtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YachtService = TestBed.get(YachtService);
    expect(service).toBeTruthy();
  });
});

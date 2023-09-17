import { TestBed } from '@angular/core/testing';

import { DrawingsService } from './drawings.service';

describe('DrawingsServiceService', () => {
  let service: DrawingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

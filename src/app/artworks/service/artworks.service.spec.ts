import { TestBed } from '@angular/core/testing';

import { ArtworksService } from './artworks.service';

describe('DrawingsServiceService', () => {
  let service: ArtworksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtworksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

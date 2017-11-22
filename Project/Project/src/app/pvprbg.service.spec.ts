import { TestBed, inject } from '@angular/core/testing';

import { PvprbgService } from './pvprbg.service';

describe('PvprbgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PvprbgService]
    });
  });

  it('should be created', inject([PvprbgService], (service: PvprbgService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { PvpService } from './pvp.service';

describe('PvpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PvpService]
    });
  });

  it('should be created', inject([PvpService], (service: PvpService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { Pvp3v3Service } from './pvp3v3.service';

describe('Pvp3v3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pvp3v3Service]
    });
  });

  it('should be created', inject([Pvp3v3Service], (service: Pvp3v3Service) => {
    expect(service).toBeTruthy();
  }));
});

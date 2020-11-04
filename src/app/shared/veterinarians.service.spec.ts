import { TestBed } from '@angular/core/testing';

import { VeterinariansService } from './veterinarians.service';

describe('VeterinariansService', () => {
  let service: VeterinariansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinariansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

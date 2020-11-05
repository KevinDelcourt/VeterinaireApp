import { TestBed } from '@angular/core/testing';

import { VeterinarianResolverService } from './veterinarian-resolver.service';

describe('VeterinarianResolverService', () => {
  let service: VeterinarianResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinarianResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

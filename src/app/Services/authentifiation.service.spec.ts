import { TestBed } from '@angular/core/testing';

import { AuthentifiationService } from './authentifiation.service';

describe('AuthentifiationService', () => {
  let service: AuthentifiationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentifiationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

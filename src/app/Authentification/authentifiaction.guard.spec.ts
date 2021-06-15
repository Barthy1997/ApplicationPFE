import { TestBed } from '@angular/core/testing';

import { AuthentifiactionGuard } from './authentifiaction.guard';

describe('AuthentifiactionGuard', () => {
  let guard: AuthentifiactionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentifiactionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GLoginGuard } from './g-login.guard';

describe('GLoginGuard', () => {
  let guard: GLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

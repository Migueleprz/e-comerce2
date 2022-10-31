import { TestBed } from '@angular/core/testing';

import { GTypeGuard } from './g-type.guard';

describe('GTypeGuard', () => {
  let guard: GTypeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GTypeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

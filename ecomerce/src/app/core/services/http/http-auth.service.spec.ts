import { TestBed } from '@angular/core/testing';

import { HttpAuthService } from './http-auth.service';

describe('HttpAuthService', () => {
  let service: HttpAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

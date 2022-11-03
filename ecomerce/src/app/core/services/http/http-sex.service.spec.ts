import { TestBed } from '@angular/core/testing';

import { HttpSexService } from './http-sex.service';

describe('HttpSexService', () => {
  let service: HttpSexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

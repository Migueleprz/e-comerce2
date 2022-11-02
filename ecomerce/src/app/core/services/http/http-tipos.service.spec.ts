import { TestBed } from '@angular/core/testing';

import { HttpTiposService } from './http-tipos.service';

describe('HttpTiposService', () => {
  let service: HttpTiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

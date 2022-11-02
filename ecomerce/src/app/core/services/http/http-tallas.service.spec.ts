import { TestBed } from '@angular/core/testing';

import { HttpTallasService } from './http-tallas.service';

describe('HttpTallasService', () => {
  let service: HttpTallasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTallasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

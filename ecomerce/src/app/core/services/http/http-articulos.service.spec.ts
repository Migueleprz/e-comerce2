import { TestBed } from '@angular/core/testing';

import { HttpArticulosService } from './http-articulos.service';

describe('HttpArticulosService', () => {
  let service: HttpArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

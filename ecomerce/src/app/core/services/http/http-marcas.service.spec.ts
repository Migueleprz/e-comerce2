import { TestBed } from '@angular/core/testing';

import { HttpMarcasService } from './http-marcas.service';

describe('HttpMarcasService', () => {
  let service: HttpMarcasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMarcasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ListaExamenesService } from './lista-examenes.service';

describe('ListaExamenesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaExamenesService = TestBed.get(ListaExamenesService);
    expect(service).toBeTruthy();
  });
});

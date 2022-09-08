import { TestBed } from '@angular/core/testing';

import { ObtenerlaboratoristaService } from './obtenerlaboratorista.service';

describe('ObtenerlaboratoristaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerlaboratoristaService = TestBed.get(ObtenerlaboratoristaService);
    expect(service).toBeTruthy();
  });
});

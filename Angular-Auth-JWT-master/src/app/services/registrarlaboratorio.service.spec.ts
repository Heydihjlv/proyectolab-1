import { TestBed } from '@angular/core/testing';

import { RegistrarlaboratorioService } from './registrarlaboratorio.service';

describe('RegistrarlaboratorioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarlaboratorioService = TestBed.get(RegistrarlaboratorioService);
    expect(service).toBeTruthy();
  });
});

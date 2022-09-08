import { TestBed } from '@angular/core/testing';

import { RegistrousuarioService } from './registrousuario.service';

describe('RegistrousuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrousuarioService = TestBed.get(RegistrousuarioService);
    expect(service).toBeTruthy();
  });
});

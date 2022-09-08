import { TestBed } from '@angular/core/testing';

import { ObtenerusuarioService } from './obtenerusuario.service';

describe('ObtenerusuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerusuarioService = TestBed.get(ObtenerusuarioService);
    expect(service).toBeTruthy();
  });
});

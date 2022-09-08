import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevolaboratorioComponent } from './nuevolaboratorio.component';

describe('NuevolaboratorioComponent', () => {
  let component: NuevolaboratorioComponent;
  let fixture: ComponentFixture<NuevolaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevolaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevolaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerlaboratoristaComponent } from './obtenerlaboratorista.component';

describe('ObtenerlaboratoristaComponent', () => {
  let component: ObtenerlaboratoristaComponent;
  let fixture: ComponentFixture<ObtenerlaboratoristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerlaboratoristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerlaboratoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

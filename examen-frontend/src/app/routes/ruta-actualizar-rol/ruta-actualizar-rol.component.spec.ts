import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarRolComponent } from './ruta-actualizar-rol.component';

describe('RutaActualizarRolComponent', () => {
  let component: RutaActualizarRolComponent;
  let fixture: ComponentFixture<RutaActualizarRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

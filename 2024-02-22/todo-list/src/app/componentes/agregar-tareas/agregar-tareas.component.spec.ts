import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTareasComponent } from './agregar-tareas.component';

describe('AgregarTareasComponent', () => {
  let component: AgregarTareasComponent;
  let fixture: ComponentFixture<AgregarTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarTareasComponent]
    });
    fixture = TestBed.createComponent(AgregarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

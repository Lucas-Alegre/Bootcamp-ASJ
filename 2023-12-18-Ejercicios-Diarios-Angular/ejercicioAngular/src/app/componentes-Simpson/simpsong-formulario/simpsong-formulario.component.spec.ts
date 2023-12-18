import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsongFormularioComponent } from './simpsong-formulario.component';

describe('SimpsongFormularioComponent', () => {
  let component: SimpsongFormularioComponent;
  let fixture: ComponentFixture<SimpsongFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsongFormularioComponent]
    });
    fixture = TestBed.createComponent(SimpsongFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

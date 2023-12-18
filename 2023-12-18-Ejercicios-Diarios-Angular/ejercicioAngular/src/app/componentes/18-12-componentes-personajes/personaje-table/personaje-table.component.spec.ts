import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeTableComponent } from './personaje-table.component';

describe('PersonajeTableComponent', () => {
  let component: PersonajeTableComponent;
  let fixture: ComponentFixture<PersonajeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajeTableComponent]
    });
    fixture = TestBed.createComponent(PersonajeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeMainComponent } from './personaje-main.component';

describe('PersonajeMainComponent', () => {
  let component: PersonajeMainComponent;
  let fixture: ComponentFixture<PersonajeMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajeMainComponent]
    });
    fixture = TestBed.createComponent(PersonajeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

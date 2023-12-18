import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsongListadoComponent } from './simpsong-listado.component';

describe('SimpsongListadoComponent', () => {
  let component: SimpsongListadoComponent;
  let fixture: ComponentFixture<SimpsongListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsongListadoComponent]
    });
    fixture = TestBed.createComponent(SimpsongListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

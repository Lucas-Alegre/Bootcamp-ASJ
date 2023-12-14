import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonMainComponent } from './simpson-main.component';

describe('SimpsonMainComponent', () => {
  let component: SimpsonMainComponent;
  let fixture: ComponentFixture<SimpsonMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonMainComponent]
    });
    fixture = TestBed.createComponent(SimpsonMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

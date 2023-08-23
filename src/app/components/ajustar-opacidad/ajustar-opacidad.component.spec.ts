import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustarOpacidadComponent } from './ajustar-opacidad.component';

describe('AjustarOpacidadComponent', () => {
  let component: AjustarOpacidadComponent;
  let fixture: ComponentFixture<AjustarOpacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustarOpacidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjustarOpacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

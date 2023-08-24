import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDinamicoComponent } from './title-dinamico.component';

describe('TitleDinamicoComponent', () => {
  let component: TitleDinamicoComponent;
  let fixture: ComponentFixture<TitleDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleDinamicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

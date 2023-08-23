import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePortadaComponent } from './image-portada.component';

describe('ImagePortadaComponent', () => {
  let component: ImagePortadaComponent;
  let fixture: ComponentFixture<ImagePortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePortadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

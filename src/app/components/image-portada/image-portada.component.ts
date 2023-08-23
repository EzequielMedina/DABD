import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-portada',
  templateUrl: './image-portada.component.html',
  styleUrls: ['./image-portada.component.css']
})
export class ImagePortadaComponent {
  @Input()
  rutaImage: string | undefined;
}

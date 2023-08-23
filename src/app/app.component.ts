import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bibilioteca-nacional';
  opacidad: number = 1;

  actulizarOpaciodad(nuevaOpacidad: number){
    this.opacidad = nuevaOpacidad;
    document.documentElement.style.setProperty('--opacidad', this.opacidad.toString());
  }
}

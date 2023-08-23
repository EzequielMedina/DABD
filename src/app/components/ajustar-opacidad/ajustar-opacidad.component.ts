import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ajustar-opacidad',
  templateUrl: './ajustar-opacidad.component.html',
  styleUrls: ['./ajustar-opacidad.component.css']
})
export class AjustarOpacidadComponent {
@Output() opacidadCambiada = new EventEmitter<number>();
@Input() opacidad: number | undefined;


emitirOpacidad(){
  this.opacidadCambiada.emit(this.opacidad)
}
}

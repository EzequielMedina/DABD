import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-dinamico',
  templateUrl: './title-dinamico.component.html',
  styleUrls: ['./title-dinamico.component.css']
})
export class TitleDinamicoComponent {
@Input() titleDinamico: string = "";
}

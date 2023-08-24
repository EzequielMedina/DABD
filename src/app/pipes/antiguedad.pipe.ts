import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'antiguedad'
})
export class AntiguedadPipe implements PipeTransform {

  transform(fechaPublicacion: string): string {
    const anioPublicacion = new Date(fechaPublicacion).getFullYear();
    const anioActual = new Date().getFullYear();
    const antiguedad = anioActual - anioPublicacion;
    return `${antiguedad} años`;
  }

}

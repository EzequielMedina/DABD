import { Component, OnInit } from '@angular/core';
import { BookProvider } from 'src/app/providers/bookProvider';
import { Ibook } from 'src/app/interfaces/ibook';
@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit {
  public listBook: Ibook[] = [];
  constructor(private bookProvider: BookProvider) { }


  ngOnInit(): void {
    this.obtenerListadoLibros();
  }
  obtenerListadoLibros() {

    this.bookProvider.listBook().subscribe(response => {
      if (response.status == "OK") {
        for (let i = 0; i < response.data.length; i++) {
          const libro: Ibook = response.data?.[i];
          this.listBook.push(libro);
        }
      }
    })
  };

  actualizarAnio(index: number) {
    this.listBook[index].anioPublicacion = this.incrementarAnio(this.listBook[index].anioPublicacion);
  }

  incrementarAnio(anioPublicacion: string){
    const fecha = new Date(anioPublicacion);

    // Verifica si la conversión de la fecha es válida
    if (!isNaN(fecha.getTime())) {
      fecha.setFullYear(fecha.getFullYear() + 1);
      const nuevoAnio = fecha.getFullYear();
      const nuevoMes = fecha.getMonth() + 1; // Los meses son indexados desde 0
      const nuevoDia = fecha.getDate();
  
      const nuevoAnioStr = nuevoAnio.toString().padStart(4, '0');
      const nuevoMesStr = nuevoMes.toString().padStart(2, '0');
      const nuevoDiaStr = nuevoDia.toString().padStart(2, '0');
  
      return `${nuevoDiaStr}/${nuevoMesStr}/${nuevoAnioStr}`; // Devuelve el nuevo año como string
    } else {
      return 'Fecha inválida';
    }
  };


}

import { Component, OnInit } from '@angular/core';
import { BookProvider } from 'src/app/providers/bookProvider';
import { Ibook } from 'src/app/interfaces/ibook';
import { SiteLoaderComponent } from '../site-loader/site-loader.component';
@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit {
  public listBook: Ibook[] = [];
  public cantidadBook: number = 0;
  public progress: number = 0;
  public cargaCompleta:boolean = false;
  public title: string = "";
  constructor(private bookProvider: BookProvider) { }


  ngOnInit(): void {
    this.obtenerListadoLibros();
    this.simulateLoading();
  }
  obtenerListadoLibros() {

    this.bookProvider.listBook().subscribe(response => {
      if (response.status == "OK") {
        this.title = "Listado de Libros"
        this.cantidadBook = response.data.length;
        for (let i = 0; i < this.cantidadBook; i++) {
          const libro: Ibook = response.data?.[i];
          this.listBook.push(libro);
        }
      }
    })
  };

  simulateLoading() {
    const interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.cargaCompleta = true;
      }
    }, 200);
  }

  actualizarAnio(index: number) {
    this.listBook[index].anioPublicacion = this.incrementarAnio(this.listBook[index].anioPublicacion);
  }

  incrementarAnio(anioPublicacion: string){
    const fecha = new Date(anioPublicacion);
    if (!isNaN(fecha.getTime())) {
      fecha.setFullYear(fecha.getFullYear() + 1);
      const nuevoAnio = fecha.getFullYear();
      const nuevoMes = fecha.getMonth() + 1; 
      const nuevoDia = fecha.getDate();
  
      const nuevoAnioStr = nuevoAnio.toString().padStart(4, '0');
      const nuevoMesStr = nuevoMes.toString().padStart(2, '0');
      const nuevoDiaStr = nuevoDia.toString().padStart(2, '0');
  
      return `${nuevoDiaStr}/${nuevoMesStr}/${nuevoAnioStr}`; 
    } else {
      return 'Fecha inválida';
    }
  };


}

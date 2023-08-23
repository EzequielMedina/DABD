import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitlePrincipalComponent } from './components/title-principal/title-principal.component';
import { CardBookComponent } from './components/card-book/card-book.component';
import { BookProvider } from './providers/bookProvider';
import { HttpClientModule } from '@angular/common/http';
import { ImagePortadaComponent } from './components/image-portada/image-portada.component';
import { AjustarOpacidadComponent } from './components/ajustar-opacidad/ajustar-opacidad.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TitlePrincipalComponent,
    CardBookComponent,
    ImagePortadaComponent,
    AjustarOpacidadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

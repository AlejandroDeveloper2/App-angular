import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { TableroComponent } from './tablero/tablero.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculaDetalleComponent,
    MensajesComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
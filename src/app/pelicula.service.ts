import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Pelicula} from './Peliculas';
import {PELICULAS} from "./lista-peliculas";

import { MensajeService } from "./mensaje.service";

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private mensajeService: MensajeService) { }

  getPeliculas(): Observable<Pelicula[]> {
    this.mensajeService.agregar("Mensaje service: Obteniendo lista de peliculas..")
    return of(PELICULAS);
  }

  getPelicula(id:number):Observable<Pelicula>{
    this.mensajeService.agregar("Pelicula service: Obtiene peliculas con id:"+id);
    const pelicula = PELICULAS.find(p=>p.id===id)!;
    return of(pelicula);
  }
}

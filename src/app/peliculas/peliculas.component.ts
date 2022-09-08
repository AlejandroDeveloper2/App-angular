import { Component, OnInit } from '@angular/core';

import { Pelicula } from '../Peliculas';
import { PeliculaService } from "../pelicula.service";

// import { PELICULAS } from '../lista-peliculas';

@Component({
  selector: 'dadb-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  // peliculas = PELICULAS;
  peliculas?: Pelicula[];
  seleccionado?: Pelicula;

  seleccionar(item:Pelicula){
    this.seleccionado = item;
  }

  constructor(private peliculaService: PeliculaService){}

  getPeliculas():void{
    // this.peliculas = this.peliculaService.getPeliculas();
    this.peliculaService.getPeliculas().subscribe(peliculas => this.peliculas = peliculas);
  }

  ngOnInit(): void {
    this.getPeliculas();
  }
}

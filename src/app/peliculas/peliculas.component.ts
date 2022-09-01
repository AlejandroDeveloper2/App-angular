import { Component, OnInit } from '@angular/core';

import { Pelicula } from '../Peliculas';

import { PELICULAS } from '../lista-peliculas';

@Component({
  selector: 'dadb-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas = PELICULAS;

  seleccionado?: Pelicula;
  seleccionar(item:Pelicula){
    this.seleccionado = item;
  }

  ngOnInit(): void {
  }
}

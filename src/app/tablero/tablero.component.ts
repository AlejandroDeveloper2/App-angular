import { Component, OnInit } from '@angular/core';

import {Pelicula} from "../Peliculas";
import {PeliculaService} from "../pelicula.service";

@Component({
  selector: 'dadb-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  peliculas?:Pelicula[];

  constructor(private peliculaService: PeliculaService) { }

  getPeliculas():void{
    this.peliculaService.getPeliculas().subscribe(peliculas =>this.peliculas = peliculas.slice(0, 2));
  }

  ngOnInit(): void {
    this.getPeliculas();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from "../Peliculas";

@Component({
  selector: 'dadb-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  @Input() seleccionado?: Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

}

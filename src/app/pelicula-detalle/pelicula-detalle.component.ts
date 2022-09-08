import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from "../Peliculas";

import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import {PeliculaService} from "../pelicula.service";

@Component({
  selector: 'dadb-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  @Input() seleccionado?: Pelicula;

  constructor(
    private route:ActivatedRoute,
    private peliculaService: PeliculaService,
    private location:Location
  ) { }

  getPelicula():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peliculaService.getPelicula(id).subscribe(pelicula=>this.seleccionado = pelicula)
  }

  ngOnInit(): void {
    this.getPelicula();
  }

regresar():void{
  this.location.back();
}

guardar():void{
  if(this.seleccionado){
    this.peliculaService.actualizar(this.seleccionado).subscribe(()=>this.regresar())
  }
}

}

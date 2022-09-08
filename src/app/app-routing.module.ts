import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PeliculasComponent} from "./peliculas/peliculas.component";
import { TableroComponent } from './tablero/tablero.component';
import {PeliculaDetalleComponent} from "./pelicula-detalle/pelicula-detalle.component";

const routes: Routes = [
  {path: "peliculas", component:PeliculasComponent},
  {path: "tablero", component:TableroComponent},
  {path: "", redirectTo:"/tablero", pathMatch:'full'},
  {path: "detalle/:id", component:PeliculaDetalleComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

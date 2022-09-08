import { Injectable } from '@angular/core';
import {InMemoryDbService}  from 'angular-in-memory-web-api';

import {Pelicula} from './Peliculas';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  // constructor() { }
  createDb(){
    const peliculas = [
      {
        id:1,
        nombre:"Matrix",
        genero:"ciencia ficción",
        director:"wachowski"
      },
      {
          id:2,
          nombre:"Kick-Ass",
          genero:"acción",
          director:"Matthew Vaughn"
      },
      {
          id:3,
          nombre:"Rapido y furioso",
          genero:"acción",
          director:"Justin Lin"
      },
      {
          id:4,
          nombre:"American Pie",
          genero:"comedia",
          director:"Chris Weitz"
      },
      {
          id:5,
          nombre:"Ouija",
          genero:"terror",
          director:"Stiles white"
      },
    ];
    return {peliculas};
  }

  genId(peliculas:Pelicula[]):number{
    return peliculas.length > 0 ? Math.max(...peliculas.map(pelicula=>pelicula.id)) + 1:11;
  }

}

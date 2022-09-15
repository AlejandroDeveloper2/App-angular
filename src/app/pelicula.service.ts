import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Pelicula} from './Peliculas';
// import {PELICULAS} from "./lista-peliculas";

import { MensajeService } from "./mensaje.service";

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private peliculasUrl ='api/peliculas';

  constructor(private mensajeService: MensajeService, private http: HttpClient) {
  }

  private registro(mensaje:string){
    this.mensajeService.agregar(mensaje);
  }

  private handleError<T>(operation='operation', result?:T){
    return (error:any):Observable<T>=>{
      this.registro(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }

  getPeliculas():Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.peliculasUrl).pipe(
      tap(_=>this.registro("obtiene peliculas")),
      catchError(this.handleError<Pelicula[]>("getPeliculas", []))
    );
  }


  getPelicula(id:number):Observable<Pelicula>{
    const url = `${this.peliculasUrl}/${id}`;
    return this.http.get<Pelicula>(url).pipe(
      tap(_=>this.registro(`pelicula encontrada:${id}`)),
      catchError(this.handleError<Pelicula>(`getPelicula id=${id}`))
    )
  }

  httpOptions={
    headers:new HttpHeaders({'Content-Type': 'application/json'})
  };

  actualizar(pelicula:Pelicula):Observable<any>{
    return this.http.put(this.peliculasUrl, pelicula, this.httpOptions).pipe(
      tap(_=>this.registro(`pelicula actualizada id=${pelicula.id}`)),
      catchError(this.handleError<any>('actualizar'))
    )
  }

  crearNuevo(pelicula: Pelicula):Observable<Pelicula> {
    return this.http.post<Pelicula>(this.peliculasUrl, pelicula, this.httpOptions).pipe(
      tap((nuevaPelicula:Pelicula)=>this.registro(`Pelicula creada w/id=${nuevaPelicula.id}`)),
      catchError(this.handleError<Pelicula>('crearNuevo'))
    );
  }

  borrarPelicula(id:number):Observable<Pelicula> {
    const url = `${this.peliculasUrl}/${id}`;
    return this.http.delete<Pelicula>(url, this.httpOptions).pipe(
      tap(_=>this.registro(`pelicula borrada id = ${id}`)),
      catchError(this.handleError<Pelicula>('borrarPelicula'))
    );
  }
}

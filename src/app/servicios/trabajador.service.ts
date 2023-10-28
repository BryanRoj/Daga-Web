import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itrabajador } from '../modelo/Itrabajador';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  
  URL:string = "http://localhost:8080/trabajadorDaga";
  apiUrl: any;

  constructor(private http:HttpClient) { }
//Listado
  getTrabajador = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postTrabajador = (data:Itrabajador) => {
    return this.http.post<Itrabajador>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleTrabajador = (id:number) => {
    return this.http.delete<Itrabajador>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putTrabajador = (data:Itrabajador) => {
    return this.http.put<Itrabajador>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

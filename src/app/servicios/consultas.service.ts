import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iconsultas } from '../modelo/Consultas/Iconsultas';
import { map } from 'rxjs';
import { GlobalService } from './globalService';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  URL:string = "/consultasDaga";
  apiUrl: any;

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getConsultas = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postConsultas = (data:Iconsultas) => {
    return this.http.post<Iconsultas>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleConsultas = (id:number) => {
    return this.http.delete<Iconsultas>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putConsultas = (data:Iconsultas) => {
    return this.http.put<Iconsultas>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

import { Injectable } from '@angular/core';
import { IdatosGenerales } from '../modelo/IdatosGenerales';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './globalService';

@Injectable({
  providedIn: 'root'
})
export class DatosGeneralesService {

  URL:string = "/datosGeneralesDaga";
  apiUrl: any;

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getDatosGenerales = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postDatosGenerales = (data:IdatosGenerales) => {
    return this.http.post<IdatosGenerales>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleDatosGenerales = (id:number) => {
    return this.http.delete<IdatosGenerales>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putDatosGenerales = (data:IdatosGenerales) => {
    return this.http.put<IdatosGenerales>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

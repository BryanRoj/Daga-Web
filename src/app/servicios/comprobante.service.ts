import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Icomprobante } from '../modelo/Icomprobante';
import {GlobalService} from "./globalService";

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  URL:string = "/comprobanteDaga";
  apiUrl: any;

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getComprobante = () => {
    this.URL = this.globalService + this.URL;
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postComprobante = (data:Icomprobante) => {
    return this.http.post<Icomprobante>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleComprobante = (id:number) => {
    return this.http.delete<Icomprobante>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putComprobante = (data:Icomprobante) => {
    return this.http.put<Icomprobante>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IdetallePresupuesto } from '../modelo/DetallePresupuesto/IdetallePresupuesto';
import { map } from 'rxjs';
import { GlobalService } from './globalService';

@Injectable({
  providedIn: 'root'
})
export class DetallePresupuestoService {
  
  URL:string = "/detallePresupuestoDaga";
  apiUrl: any;

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getDetallePresupuesto = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postDetallePresupuesto = (data:IdetallePresupuesto) => {
    return this.http.post<IdetallePresupuesto>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleDetallePresupuesto = (id:number) => {
    return this.http.delete<IdetallePresupuesto>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putDetallePresupuesto = (data:IdetallePresupuesto) => {
    return this.http.put<IdetallePresupuesto>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipresupuesto } from '../modelo/Presupuesto/Ipresupuesto';
import { map } from 'rxjs';
import { GlobalService } from './globalService';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  
  URL:string = "/presupuestoDaga";
  apiUrl: any;

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getPresupuesto = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postPresupuesto = (data:Ipresupuesto) => {
    return this.http.post<Ipresupuesto>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  delePresupuesto = (id:number) => {
    return this.http.delete<Ipresupuesto>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putPresupuesto = (data:Ipresupuesto) => {
    return this.http.put<Ipresupuesto>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

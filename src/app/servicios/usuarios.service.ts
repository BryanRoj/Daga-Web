import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iusuarios } from '../modelo/Iusuarios';
import { Observable, map } from 'rxjs';
import { GlobalService } from './globalService';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL:string = "usuariosDisargesa";
  apiUrl: any;
  
  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }

  getUsuarios = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postUsuarios = (data:Iusuarios) => {
    return this.http.post<Iusuarios>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleteUsuarios = (id:number) => {
    return this.http.delete<Iusuarios>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putUsuarios = (data:Iusuarios) => {
    return this.http.put<Iusuarios>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  getLogin = (usuario: string, contrasena: string): Observable<Iusuarios> => {
    let header = new HttpHeaders().set('Type-content','application/json');
    const url = `${this.URL}/login/${usuario}+${contrasena}`
    return this.http.get<Iusuarios>(url, {headers : header});
  }
}

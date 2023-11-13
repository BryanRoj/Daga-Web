import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  postUsuarios = (data:any) => {
    return this.http.post<any>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleteUsuarios = (id:number) => {
    return this.http.delete<any>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putUsuarios = (data:any) => {
    return this.http.put<any>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  getLogin = (usuario: string, contrasena: string): Observable<any> => {
    let header = new HttpHeaders().set('Type-content','application/json');
    const url = `${this.URL}/login/${usuario}+${contrasena}`
    return this.http.get<any>(url, {headers : header});
  }
}

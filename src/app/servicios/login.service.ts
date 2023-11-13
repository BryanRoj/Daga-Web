import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../modelo/Login/Ilogin';
import { Observable, map } from 'rxjs';
import {GlobalService} from "./globalService";
import { login } from '../modelo/Login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL:string = "/loginDaga";
  apiUrl: any;
  isLoggedIn: boolean = false; // Variable que indica si el usuario ha iniciado sesión

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getLogin = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get<login[]>(this.URL, {headers : header})
  }

  getLoginById = (id: number) => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get<login>(this.URL + '/' + id, {headers : header})
  }

  postLogin = (data:any) => {
    return this.http.post<Ilogin>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleLogin = (id:number) => {
    return this.http.delete<Ilogin>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putLogin = (data:any) => {
    return this.http.put<Ilogin>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  getIniciarSesion = (usuario: string, contrasena: string): Observable<Ilogin> => {
    let header = new HttpHeaders().set('Type-content','application/json');
    const url = `${this.URL}/login/${usuario}+${contrasena}`
    this.isLoggedIn = true; // Actualiza el valor de isLoggedIn a true
    return this.http.get<Ilogin>(url, {headers : header});
  }
  generarCodigo = (correo: string) => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get<any>(this.URL + '/enviar_codigo?correo=' + correo, {headers : header})
  }

  validarCodigo = (codigo: string, id: number) => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get<any>(this.URL + '/validar_codigo?codigo=' + codigo+'&id=' + id, {headers : header})
  }

  actualizarContrasennia = (password: string, id: number) => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get<any>(this.URL + '/actualizar_contreasenia?password=' + password+'&id=' + id, {headers : header})
  }
}

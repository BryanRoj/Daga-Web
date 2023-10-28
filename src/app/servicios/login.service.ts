import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../modelo/Ilogin';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL:string = "https://spring-271023.ue.r.appspot.com/loginDaga";
  apiUrl: any;
  isLoggedIn: boolean = false; // Variable que indica si el usuario ha iniciado sesión

  constructor(private http:HttpClient) { }
//Listado
  getLogin = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postLogin = (data:Ilogin) => {
    return this.http.post<Ilogin>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleLogin = (id:number) => {
    return this.http.delete<Ilogin>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putLogin = (data:Ilogin) => {
    return this.http.put<Ilogin>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  getIniciarSesion = (usuario: string, contrasena: string): Observable<Ilogin> => {
    let header = new HttpHeaders().set('Type-content','application/json');
    const url = `${this.URL}/login/${usuario}+${contrasena}`
    this.isLoggedIn = true; // Actualiza el valor de isLoggedIn a true
    return this.http.get<Ilogin>(url, {headers : header});
  }

  cerrarSesion(): void {
    this.isLoggedIn = false; // Actualiza el valor de isLoggedIn a false
  }
}

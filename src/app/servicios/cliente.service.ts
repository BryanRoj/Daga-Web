import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Icliente } from '../modelo/Icliente';
import { GlobalService } from './globalService';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL:string = "/clienteDaga";
  apiUrl: any;

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getCliente = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postCliente = (data:Icliente) => {
    return this.http.post<Icliente>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleCliente = (id:number) => {
    return this.http.delete<Icliente>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putCliente = (data:Icliente) => {
    return this.http.put<Icliente>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  getLogin = (email_Cliente: string, pass_Cliente: string): Observable<Icliente> => {
    let header = new HttpHeaders().set('Type-content','application/json');
    const url = `${this.URL}/login/${email_Cliente}+${pass_Cliente}`
    return this.http.get<Icliente>(url, {headers : header});
  }
}

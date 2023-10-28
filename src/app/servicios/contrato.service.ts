import { Injectable } from '@angular/core';
import { Icontrato } from '../modelo/Icontrato';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  
  URL:string = "http://localhost:8080/contratoDaga";
  apiUrl: any;

  constructor(private http:HttpClient) { }
//Listado
  getContrato = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postContrato = (data:Icontrato) => {
    return this.http.post<Icontrato>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleContrato = (id:number) => {
    return this.http.delete<Icontrato>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putContrato = (data:Icontrato) => {
    return this.http.put<Icontrato>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

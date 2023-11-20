import { Injectable } from '@angular/core';
import { Idistrito } from '../modelo/Distrito/Idistrito';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './globalService';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  URL:string = "/distritoDaga";
  apiUrl: any;

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getDistrito = () => {
    //let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL);
  }

  postDistrito = (data:Idistrito) => {
    return this.http.post<Idistrito>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleDistrito = (id:number) => {
    return this.http.delete<Idistrito>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putDistrito = (data:Idistrito) => {
    return this.http.put<Idistrito>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

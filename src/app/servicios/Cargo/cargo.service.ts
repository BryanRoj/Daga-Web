import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icargo } from 'src/app/modelo/Cargo/Icargo';
import { map } from 'rxjs';
import { GlobalService } from '../globalService';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  URL:string = "/cargoDaga";
  apiUrl: any;

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getCargo = () => {
  //  let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL);
  }

  postCargo = (data:Icargo) => {
    return this.http.post<Icargo>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleCargo = (id:number) => {
    return this.http.delete<Icargo>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putCargo = (data:Icargo) => {
    return this.http.put<Icargo>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

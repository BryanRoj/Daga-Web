import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproductos } from '../modelo/NoUsados/Iproductos';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  URL:string = "/productosDisargesa";
  apiUrl: any;

  constructor(private http:HttpClient, private httpClient: HttpClient) { }

  public pageProd(page: number, size: number, order: String, asc: boolean): Observable<any>{
    let header = new HttpHeaders().set('Type-content','application/json');
    const url = `${this.URL}/paginas?page=${page}&size=${size}&order=${order}&asc=${asc}`
    return this.httpClient.get<any>(url, {headers : header});
  }

//Listado
  getProductos = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postProductos = (data:Iproductos) => {
    return this.http.post<Iproductos>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleProductos = (id:number) => {
    return this.http.delete<Iproductos>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putProductos = (data:Iproductos) => {
    return this.http.put<Iproductos>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}

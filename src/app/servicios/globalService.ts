import { Injectable } from '@angular/core';
import { IdatosGenerales } from '../modelo/IdatosGenerales';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseURL: string = "https://spring-271023.ue.r.appspot.com";
  public getUrl():any{
    return this.baseURL;
  }

}

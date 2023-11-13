import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //baseURL: string = "https://spring-271023.ue.r.appspot.com";
  baseURL: string = "http://localhost:8080";
  public cargo_admin: number = 1;
  public cargo_secretario: number = 2;
  public cargo_obrero: number = 3;

  public getUrl():any{
    return this.baseURL;
  }

}

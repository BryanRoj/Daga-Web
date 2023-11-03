import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //baseURL: string = "https://spring-271023.ue.r.appspot.com";
  baseURL: string = "http://localhost:8080";
  public getUrl():any{
    return this.baseURL;
  }

}

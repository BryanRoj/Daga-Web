import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Titulo:string = 'Bienvenido';
  nombre:string = "Bryan Rojas";
  fecha:number = 2023;
  colorFondo:string = "#717D7E";

  mostrarMenuAdministrador = true;

  constructor( private http: HttpClient) {

  }

  ngOnInit(): void {
    /*this.http.get('http://localhost:8080',{ 
    //this.http.get('https://spring-271023.ue.r.appspot.com/', {
      withCredentials: true
    })
      .subscribe(response => {
        // ...
      });*/
   }

}

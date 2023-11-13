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

  constructor( ) {

  }

  ngOnInit(): void {
   }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Titulo:string = 'Bienvenido';
  nombre:string = "Bryan Rojas";
  fecha:number = 2023;
  colorFondo:string = "#717D7E";

  mostrarMenuAdministrador = true;
  
}

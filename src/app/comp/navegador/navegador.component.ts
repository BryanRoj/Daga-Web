import { Component } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent {
  usuario: any = null;
  isLoggedIn: boolean;
  mostrarMenuAdministrador: boolean = false; // Variable que indica si se debe mostrar el menú del administrador
  constructor(public loginService: LoginService) {
    this.isLoggedIn = loginService.isLoggedIn; // Obtén el valor inicial de 'isLoggedIn' del servicio de inicio de sesión

    var datos = localStorage.getItem('usuario');
    if(localStorage.getItem('usuario') != null){
      this.usuario = JSON.parse(datos!);
      console.dir('DATOS LOGEADO');
      console.dir(this.usuario);
    }

  }
}

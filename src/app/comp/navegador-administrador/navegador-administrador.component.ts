import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navegador-administrador',
  templateUrl: './navegador-administrador.component.html',
  styleUrls: ['./navegador-administrador.component.css']
})
export class NavegadorAdministradorComponent {
  
  isLoggedIn: boolean;
  mostrarMenuAdministrador: boolean = false; // Variable que indica si se debe mostrar el menú del administrador
  constructor(private appComponent: AppComponent, public loginService: LoginService) { 
    this.isLoggedIn = loginService.isLoggedIn; // Obtén el valor inicial de 'isLoggedIn' del servicio de inicio de sesión
  }
  

  salir() {
    this.loginService.cerrarSesion();
    this.appComponent.mostrarMenuAdministrador = true; // Cambiar el valor de mostrarMenu a true
  }
}

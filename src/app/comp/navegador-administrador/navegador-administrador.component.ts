import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { login } from 'src/app/modelo/Login/login';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navegador-administrador',
  templateUrl: './navegador-administrador.component.html',
  styleUrls: ['./navegador-administrador.component.css']
})
export class NavegadorAdministradorComponent implements OnInit{
  usuario: any = null;
  isLoggedIn: boolean;
  mostrarMenuAdministrador: boolean = false; // Variable que indica si se debe mostrar el menú del administrador
  constructor(private appComponent: AppComponent, public loginService: LoginService) {
    this.isLoggedIn = loginService.isLoggedIn; // Obtén el valor inicial de 'isLoggedIn' del servicio de inicio de sesión

    var datos = localStorage.getItem('usuario');
    if(localStorage.getItem('usuario') != null){
      this.usuario = JSON.parse(datos!);
      console.dir('DATOS LOGEADO');
      console.dir(this.usuario);
    }

    if(this.usuario == null){
   //   alert('NO ESTOY LOGEADO');
     this.loginService.cerrarSesion();
    }
  }
  ngOnInit(): void {
  }


  salir() {
    localStorage.removeItem('usuario');
    this.loginService.cerrarSesion();
    this.appComponent.mostrarMenuAdministrador = true; // Cambiar el valor de mostrarMenu a true
  }
}

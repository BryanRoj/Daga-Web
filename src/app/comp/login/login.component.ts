import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm: FormGroup;
  resultado: string | undefined;
  showPassword = false;
  intentos = 0;
  bloqueado = false;

  constructor(private router: Router, private http: HttpClient,private formBuilder: FormBuilder, private servicio: LoginService) {
    this.loginForm = this.formBuilder.group({
      usuario_admin: ['', Validators.required],
      pass_Admin: ['', Validators.required]
    });
  }

  login() {
    if (this.bloqueado) {
      this.resultado = "Tu cuenta está bloqueada. Por favor, recupera tu cuenta.";
      return;
    }

    const usuario = this.loginForm.controls['usuario_admin'].value;
    const contraseña = this.loginForm.controls['pass_Admin'].value;

    this.servicio.getIniciarSesion(usuario, contraseña).subscribe(
      (response:any) => {
        if (response) {
          console.log(response)
          if (response.usuario == "INCORRECT PASSWORD" ){
            this.resultado = "Contraseña incorrecta, solo cuenta con 3 intentos antes del bloqueo.";
          } else if(response.usuario == "LIMITE DE INTENTOS"){
            const fechaAhora = new Date().getTime();
            const fecha = new Date(response.tiempoBloqueo);

            this.resultado = "Se ha bloqueado el login, intentelo mas tarde. " + fecha.toString();
          } else {
            this.router.navigate(['/administrador']);
            this.servicio.isLoggedIn = true; // Inicio de sesión exitoso
          }
        } else {
          // Credenciales incorrectas
          this.resultado = "El usuario no existe";
        }
      },
      (error) => {
        this.resultado = "Ocurrió un error durante el inicio de sesión";
      }
    );
  }
}

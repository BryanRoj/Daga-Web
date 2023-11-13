import { Component } from '@angular/core';
import { AlertifyService } from 'src/app/servicios/alertify.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent {
  bloque: number = 1;
  correo: string = '';
  cargando: Boolean= false;
  datos:  any = {
    correo: '',
    idLogin: 0,
    codigo: '',
    password: ''
  }

  constructor(private servicio: LoginService,
              private alerta: AlertifyService
    ) {}

  fnGenerarCodigo(){
    const correo = this.datos.correo;
    this.cargando = true;
    this.servicio.generarCodigo(correo).subscribe(
      (response:any) => {
        if(response.msg == 'OK'){
          this.datos.idLogin = response.data.idLogin;
          this.bloque = 2;
        }else{
          this.alerta.warning(response.msg);
        }
        this.cargando = false;
      },
      (error) => {
        console.dir(error);
        this.alerta.error('Error al generar codigo!');
        this.cargando = false;
      }
    );
  }

  fnValidarCodigo(){
    const codigo = this.datos.codigo;
    const id = this.datos.idLogin;
    this.cargando = true;

    this.servicio.validarCodigo(codigo , id).subscribe(
      (response:any) => {
        if(response.msg == 'OK'){
          this.alerta.success('Codigo validado!');
          this.bloque = 3;
        }else{
          this.alerta.warning(response.msg);
        }
        this.cargando = false;
      },
      (error) => {
        console.dir(error);
        this.alerta.error('Error al confirmar codigo de seguridad!');
        this.cargando = false;
      }
    );
  }

  fnValidarConfirmacion(){
    const passowrd = this.datos.password;
    const id = this.datos.idLogin;
    this.cargando = true;

    this.servicio.actualizarContrasennia(passowrd , id).subscribe(
      (response:any) => {
        if(response.msg == 'OK'){
          this.alerta.success('Contraseña actualizada!');
          this.datos.codigo = '';
          this.datos.password = '';
          this.bloque = 1;
        }else{
          this.alerta.warning(response.msg);
        }
        this.cargando = false;
      },
      (error) => {
        console.dir(error);
        this.alerta.error('Error al actualizar contraseña!');
        this.cargando = false;
      }
    );
  }

  fnRedirect(bloque: number){
    this.bloque = bloque;

    if(bloque == 1){
      this.datos.codigo = '';
    }
  }

  validateFormat(event: any) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
     if (!regex.test(key)) {
      event.returnValue = false;
       if (event.preventDefault) {
        event.preventDefault();
       }
     }
    }

}

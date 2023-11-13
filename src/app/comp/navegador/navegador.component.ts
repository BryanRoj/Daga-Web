import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent  implements OnInit {
  usuario: any = null;
   constructor( public auth: AuthService) {

  }
  ngOnInit(): void {
    this.usuario = this.auth.getUsuario();
  }

  salir(){
    this.auth.removerLogin();
    window.location.href = '/login';
  }
}

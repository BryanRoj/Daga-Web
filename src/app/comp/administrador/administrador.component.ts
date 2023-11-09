import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Ilogin } from 'src/app/modelo/Login/Ilogin';
import { LoginService } from 'src/app/servicios/login.service';
import { login } from 'src/app/modelo/Login/login';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})

export class AdministradorComponent{
  login: Ilogin[] = [];
  objUsuarios: login = new login();
  usuarioActual: Ilogin | null = null; // Almacenar el usuario actual

  constructor(private appComponent: AppComponent, private servicioLogin: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit():void  {
    this.appComponent.mostrarMenuAdministrador = false; // Mostrar el menú de contacto
    this.servicioLogin.getLogin();
  }

  formUsuarios= new FormGroup({
    usuario: new FormControl(),
    contrasena: new FormControl(),
    nombre: new FormControl(),
    apellido: new FormControl(),
    dni: new FormControl(),
    edad: new FormControl(),
    fecha_nacimiento: new FormControl(),
    correo: new FormControl(),
    telefono: new FormControl(),
    tipo_usuario: new FormControl()
  });
  
  getUsuarios = () => {
    this.servicioLogin.getLogin().subscribe((resp: any) => {
      this.login = resp;
    });
  }

  emitirPresupuesto() {
    this.router.navigate(['/presupuestos']);
  }

  mostrarReportes(){
    this.router.navigate(['/reportes'])
  }

 emitirBoleta(){
    this.router.navigate(['/boleta'])
  }

  emitirFactura(){
    this.router.navigate(['/factura'])
  }

  mostrarContratos(){
    this.router.navigate(['/contrato'])
  }
}

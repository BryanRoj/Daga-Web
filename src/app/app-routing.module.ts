import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './comp/inicio/inicio.component';
import { ContactoComponent } from './comp/contacto/contacto.component';
import { LoginComponent } from './comp/login/login.component';
import { ConsultasComponent } from './comp/consultas/consultas.component';
import { UsuariosComponent } from './comp/usuarios/usuarios.component';
import { ClienteComponent } from './comp/cliente/cliente.component';
import { ReportesComponent } from './comp/reportes/reportes.component';
import { PresupuestosComponent } from './comp/presupuestos/presupuestos.component';
import { BoletaComponent } from './comp/boleta/boleta.component';
import { FacturaComponent } from './comp/factura/factura.component';
import { ContratoComponent } from './comp/contrato/contrato.component';
import { ComprobanteComponent } from './comp/comprobante/comprobante.component';
import { RecuperarPasswordComponent } from './comp/recuperar-password/recuperar-password.component';
import { HomeComponent } from './comp/home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { NoAuthGuard } from './guards/noauth.guard';
import { AuthAdminSecretarioGuard } from './guards/authAdminSecretario.guard';
import { ObreroGuard } from './guards/obrero.guard';

const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"login",component:LoginComponent,canActivate:[NoAuthGuard]},
  {path:"contacto",component:ContactoComponent},
  {path:"consultas",component:ConsultasComponent , canActivate:[AdminGuard]},
  {path: "usuarios",component:UsuariosComponent , canActivate:[AdminGuard]},
  {path: "cliente",component:ClienteComponent ,canActivate:[NoAuthGuard]},
  {path: "reportes",component:ReportesComponent, canActivate:[ObreroGuard]},
  {path: "presupuestos",component:PresupuestosComponent, canActivate:[AuthAdminSecretarioGuard]},
  {path: "boleta",component:BoletaComponent},
  {path: "factura",component:FacturaComponent},
  {path: "contrato",component:ContratoComponent, canActivate:[AuthAdminSecretarioGuard]},
  {path: "reportes",component:ReportesComponent},
  {path: "comprobante",component:ComprobanteComponent, canActivate:[AuthAdminSecretarioGuard]},
  {path: "recuperar",component:RecuperarPasswordComponent,canActivate:[NoAuthGuard]},
  {path: "home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

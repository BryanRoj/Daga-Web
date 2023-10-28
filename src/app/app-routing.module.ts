import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './comp/inicio/inicio.component';
import { ContactoComponent } from './comp/contacto/contacto.component';
import { LoginComponent } from './comp/login/login.component';
import { ServiciosComponent } from './comp/servicios/servicios.component';
import { AdministradorComponent } from './comp/administrador/administrador.component';
import { ModificarComponent } from './comp/modificar/modificar.component';
import { ConsultasComponent } from './comp/consultas/consultas.component';
import { UsuariosComponent } from './comp/usuarios/usuarios.component';
import { ClienteComponent } from './comp/cliente/cliente.component';
import { ReportesComponent } from './comp/reportes/reportes.component';
import { PresupuestosComponent } from './comp/presupuestos/presupuestos.component';
import { BoletaComponent } from './comp/boleta/boleta.component';
import { FacturaComponent } from './comp/factura/factura.component';
import { ContratoComponent } from './comp/contrato/contrato.component';

const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"login",component:LoginComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"servicios",component:ServiciosComponent},
  {path:"administrador",component:AdministradorComponent},
  {path:"modificar",component:ModificarComponent},
  {path:"consultas",component:ConsultasComponent},
  {path: "usuarios",component:UsuariosComponent },
  {path: "cliente",component:ClienteComponent },
  {path: "reportes",component:ReportesComponent},
  {path: "presupuestos",component:PresupuestosComponent},
  {path: "boleta",component:BoletaComponent},
  {path: "factura",component:FacturaComponent},
  {path: "contrato",component:ContratoComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

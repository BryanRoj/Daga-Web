import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './comp/navegador/navegador.component';
import { InicioComponent } from './comp/inicio/inicio.component';
import { LoginComponent } from './comp/login/login.component';
import { ContactoComponent } from './comp/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegadorAdministradorComponent } from './comp/navegador-administrador/navegador-administrador.component';
import { BusquedaProductosPipe } from './pipes/busqueda-productos.pipe';
import { BusquedaUsuariosPipe } from './pipes/busqueda-usuarios.pipe';
import { UsuariosComponent } from './comp/usuarios/usuarios.component';
import { ConsultasComponent } from './comp/consultas/consultas.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ClienteComponent } from './comp/cliente/cliente.component';
import { ReportesComponent } from './comp/reportes/reportes.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PresupuestosComponent } from './comp/presupuestos/presupuestos.component';
import { BoletaComponent } from './comp/boleta/boleta.component';
import { FacturaComponent } from './comp/factura/factura.component';
import { ContratoComponent } from './comp/contrato/contrato.component';
import { ComprobanteComponent } from './comp/comprobante/comprobante.component';
import { AdministradorComponent } from './comp/administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    InicioComponent,
    LoginComponent,
    ContactoComponent,
    NavegadorAdministradorComponent,
    BusquedaProductosPipe,
    BusquedaUsuariosPipe,
    UsuariosComponent,
    ConsultasComponent,
    ClienteComponent,
    ReportesComponent,
    PresupuestosComponent,
    BoletaComponent,
    FacturaComponent,
    ContratoComponent,
    ComprobanteComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

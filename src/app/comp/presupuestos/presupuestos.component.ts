import { Component, OnInit } from '@angular/core';
import { detallePresupuesto } from 'src/app/modelo/DetallePresupuesto/detallePresupuesto';
import { login } from 'src/app/modelo/Login/login';
import { CargoService } from 'src/app/servicios/Cargo/cargo.service';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { DetallePresupuestoService } from 'src/app/servicios/detallePresupuesto.service';
import { DistritoService } from 'src/app/servicios/Distritos/distrito.service';
import { LoginService } from 'src/app/servicios/Login/login.service';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { TrabajadorService } from 'src/app/servicios/Trabajador/trabajador.service';

declare var $: any;

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent {
  trabajadores: any[] = [];
  distritos: any[] = [];
  cargos : any[] = [];
  trab: login = new login();
  consultaUsuarios = "";

  detallePresupuesto:any[] = [];
  presupuesto:any[] = [];
  cliente:any[] = [];
  servicio:any[] = [];
  detPre: detallePresupuesto = new detallePresupuesto();

  constructor(
    private detalleService: DetallePresupuestoService,
    private presupuestoService: PresupuestoService,
    private clienteServide: ClienteService,
    private servicioService: ServicioService,
    private trabajadorService: TrabajadorService,

    private loginService: LoginService,
    private distritoService: DistritoService,
    private cargoService: CargoService) {}

  ngOnInit(): void {
    //this.listarDetalle();
    //this.listarCliente();
    //this.listarServicio();
    //this.listarPresupuesto();
    //this.listarTrabajador();

    this.listarDistritos();
    this.listarTrabajadores();
    this.listarCargos();

  }

  cargarTrabajadores(){
    this.listarTrabajadores();
  }

  listarServicio(){
    this.servicioService.getServicio().subscribe((resp: any) => {
      this.servicio = resp;
    });
  }

  listarCliente(){
    this.clienteServide.getCliente().subscribe((resp: any) => {
      this.cliente = resp;
    });
  }


/*
  nuevo(){
    this.trab = new login();
    $('#modalNuevo').modal('show');
  }

  cargarDatos(item: any){
    this.loginService.getLoginById(item.idLogin).subscribe((resp: any) => {
      this.trab = Object.assign({}, resp) ;
      $('#modalNuevo').modal('show');
    });

  }

  guardar(){
    this.loginService.postLogin(this.trab).subscribe((resp: any) => {
      if(resp != null){
        this.listarTrabajadores();
        $('#modalNuevo').modal('hide');
      }
    });
  }

  eliminar(item: any){
    const nombres = item.trabajador.datosGenerales.nombre + ' ' + item.trabajador.datosGenerales.apellidos;
    if(confirm('¿Está seguro que desea eliminar al trabajador '+nombres+'?')){
      this.loginService.deleLogin(item.idLogin).subscribe((resp: any) => {
        this.listarTrabajadores();
      });
    }
  }

*/


  cargarCargos(){
    this.listarCargos();
  }

  listarTrabajadores = () => {
    this.loginService.getLogin().subscribe((resp: any) => {
      this.trabajadores = resp;
    });
  }

  listarCargos = () => {
    this.cargoService.getCargo().subscribe((resp: any) => {
      this.cargos = resp;
    });
  }

  listarDistritos = () => {
    this.distritoService.getDistrito().subscribe((resp: any) => {
      this.distritos = resp;
    });
  }

  nuevo(){
    this.trab = new login();
    $('#modalNuevo').modal('show');
  }

  cargarDatos(item: any){
    this.loginService.getLoginById(item.idLogin).subscribe((resp: any) => {
      this.trab = Object.assign({}, resp) ;
      $('#modalNuevo').modal('show');
    });

  }

  guardar(){
    this.loginService.postLogin(this.trab).subscribe((resp: any) => {
      if(resp != null){
        this.listarTrabajadores();
        $('#modalNuevo').modal('hide');
      }
    });
  }

  eliminar(item: any){
    const nombres = item.trabajador.datosGenerales.nombre + ' ' + item.trabajador.datosGenerales.apellidos;
    if(confirm('¿Está seguro que desea eliminar al trabajador '+nombres+'?')){
      this.loginService.deleLogin(item.idLogin).subscribe((resp: any) => {
        this.listarTrabajadores();
      });
    }
  }
}

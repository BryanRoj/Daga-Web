import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/modelo/Login/login';
import { CargoService } from 'src/app/servicios/cargo.service';
import { DistritoService } from 'src/app/servicios/distrito.Service';
import { LoginService } from 'src/app/servicios/login.service';

declare var $: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  trabajadores: any[] = [];
  distritos: any[] = [];
  cargos : any[] = [];
  trab: login = new login();
  consultaUsuarios = "";

  constructor(
    private loginService: LoginService,
    private distritoService: DistritoService,
    private cargoService: CargoService) {}

  ngOnInit(): void {
    this.listarDistritos();
    this.listarTrabajadores();
    this.listarCargos();

  }

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

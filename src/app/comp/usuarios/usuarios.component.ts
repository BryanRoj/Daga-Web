import { Component, OnInit } from '@angular/core';
import { Icliente } from 'src/app/modelo/Icliente';
import { Itrabajador } from 'src/app/modelo/Itrabajador';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';
import { CargoService } from 'src/app/servicios/cargo.service';
import { Icargo } from 'src/app/modelo/Icargo';
import { DatosGeneralesService } from 'src/app/servicios/datosGenerales.Service';
import { IdatosGenerales } from 'src/app/modelo/IdatosGenerales';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  vista: string = 'carta';
  subrayado: string = "text-decoration-underline mt-3";
  cliente: Icliente[] = [];
  trabajador: any[] = [];
  cargo: Icargo[] = [];
  datosGenerales: IdatosGenerales[] = [];
  consultaUsuarios = "";
  tipoUsuario: string = 'cliente';

  constructor(private clienteService: ClienteService, private trabajadorService: TrabajadorService, private cargoService: CargoService, private datosGeneralesService: DatosGeneralesService) {}

  ngOnInit(): void {
    this.getCliente();
    this.getTrabajador();
    this.getCargo();
    this.getDatosGenerales();
    //this.getCargo();
  }

  getCliente = () => {
    this.clienteService.getCliente().subscribe((resp: any) => {
      this.cliente = resp;
    });
  }

  getTrabajador = () => {
    this.trabajadorService.getTrabajador().subscribe((resp: any) => {
      this.trabajador = resp;
      console.log(resp)
      console.log(this.trabajador)
    });
  }

  getCargo = () => {
    this.cargoService.getCargo().subscribe((resp: any) => {
      this.cargo = resp;
    });
  }

  getDatosGenerales = () => {
    this.datosGeneralesService.getDatosGenerales().subscribe((resp: any) => {
      this.datosGenerales = resp;
    });
  }

}

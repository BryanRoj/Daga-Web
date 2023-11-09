import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Icargo } from 'src/app/modelo/Cargo/Icargo';
import { IdatosGenerales } from 'src/app/modelo/DatosGenerales/IdatosGenerales';
import { Itrabajador } from 'src/app/modelo/Trabajador/Itrabajador';
import { cargo } from 'src/app/modelo/Cargo/cargo';
import { datosGenerales } from 'src/app/modelo/DatosGenerales/datosGenerales';
import { trabajador } from 'src/app/modelo/Trabajador/trabajador';
import { CargoService } from 'src/app/servicios/cargo.service';
import { DatosGeneralesService } from 'src/app/servicios/datosGenerales.Service';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  Elegir: string = 'modTrabajador';
  tipoModificacion: string = 'Registrar';
  parametros: any;

  ngOnInit():void  {
    //this.appComponent.mostrarMenuAdministrador = false; // Mostrar el menú de contacto
    this.route.queryParamMap.subscribe(
      (params) => { this.parametros = { ...params.keys, ...params } }
    );
    this.getCargo();
    this.getTrabajador();

    this.getNombresDatosGenerales();
    this.getTipoCargo();
  }

  
  constructor(private route: ActivatedRoute, private trabajadorService: TrabajadorService, private cargoService: CargoService, 
    private datosGeneralesService: DatosGeneralesService, private router: Router) { }
    
  /*************************************************************************************/

    NuevoDato() {
      this.router.navigate(['/nuevoDato']);
    }

  /*************************************************************************************/

  cargo: any[] = [];
  objCargo: any = {};
  insUpdCargo: boolean = true;
  textoFormCargo: string = "Insertar Nuevo Cargo";

  
  formCargo = new FormGroup({
    id_Cargo: new FormControl(),
    tipo_Cargo: new FormControl(),
    descripcion_Cargo: new FormControl()
  });

  getCargo = () => {
    this.cargoService.getCargo().subscribe((resp: any) => {
      this.cargo = resp;
    });
  }

  registrarCargo = () => {
    this.objCargo.idCargo = this.formCargo.value.id_Cargo;
    this.objCargo.tipoCargo = this.formCargo.value.tipo_Cargo;
    this.objCargo.descripcionCargo = this.formCargo.value.descripcion_Cargo;
  
    // INSERTAR
    if (this.insUpdCargo) {
      this.cargoService.postCargo(this.objCargo).subscribe(resp => {
        this.formCargo.reset(); // Limpiar el formulario
        this.getCargo();
      });
    } else { // ACTUALIZAR
      this.objCargo.idCargo = this.formCargo.value.id_Cargo;

      this.cargoService.putCargo(this.objCargo).subscribe(resp => {
        this.formCargo.reset();
        this.getCargo();
        this.textoFormCargo = "Insertar Cargo";
        this.insUpdCargo = true;
      })
    }
  }

  editarCargo = (c: Icargo) => {
    this.objCargo.id_Cargo = c.idCargo;
    this.formCargo.controls['id_Cargo'].setValue(c.idCargo);
    this.formCargo.controls['tipo_Cargo'].setValue(c.tipoCargo);
    this.formCargo.controls['descripcion_Cargo'].setValue(c.descripcionCargo);
  
    // Texto
    this.textoFormCargo = "Actualizar Cargos";
    this.insUpdCargo = false;
  }
  
  eliminarCargo = (c: Icargo) => {
    let confirm = window.confirm(`¿Seguro que desea eliminar el cargo ${c.tipoCargo}?`);
    if (confirm) {
      this.cargoService.deleCargo(c.idCargo).subscribe(resp => {
        this.getCargo();
      });
    }
  }

  /*************************************************************************************/
  trabajador: any[] = [];
  nombresDatosGenerales: string[] = [];
  tipoCargo: string[] = [];
  //trabajador: Itrabajador[] = [];
  objTrabajador: any = {};
  insUpdTrabajador: boolean = true;
  textoFormTrabajador: string = "Insertar Nuevo Trabajador";
  
  formTrabajador = new FormGroup({
    id_Trabajador: new FormControl(),
    id_Datos: new FormControl(),
    id_Cargo: new FormControl()
  });

  getTrabajador = () => {
    this.trabajadorService.getTrabajador().subscribe((resp: any) => {
      this.trabajador = resp;
      this.formTrabajador.controls['id_Trabajador'].setValue(this.trabajador.length + 1);
      console.log(resp)
      console.log(this.trabajador)
    });
  }

  registrarTrabajador = () => {
    this.objTrabajador.idTrabajador = this.formTrabajador.value.id_Trabajador;
    this.objTrabajador.datosGenerales = this.formTrabajador.value.id_Datos;
    this.objTrabajador.cargo = this.formTrabajador.value.id_Cargo
  
    // INSERTAR
    if (this.insUpdTrabajador) {
      this.trabajadorService.postTrabajador(this.objTrabajador).subscribe(resp => {
        this.formTrabajador.reset(); // Limpiar el formulario
        this.getTrabajador();
      });
    } else { // ACTUALIZAR
      this.objTrabajador.idTrabajador = this.formTrabajador.value.id_Trabajador;

      this.trabajadorService.putTrabajador(this.objTrabajador).subscribe(resp => {
        this.formTrabajador.reset();
        this.getTrabajador();
        this.textoFormTrabajador = "Insertar Trabajador";
        this.insUpdTrabajador = true;
      })
    }
  }


  editarTrabajador = (t: Itrabajador) => {
    this.objTrabajador.id_Trabajador = t.idTrabajador;
    this.formTrabajador.controls['id_Trabajador'].setValue(t.idTrabajador);
    this.formTrabajador.controls['id_Cargo'].setValue(t.cargo.tipoCargo);
    this.formTrabajador.controls['id_Datos'].setValue(t.datosGenerales.nombre);

    //Texto
    this.tipoModificacion = 'Update';
    this.textoFormTrabajador = "Actualizar Trabajador";
    this.insUpdTrabajador = false;
  }

  eliminarTrabajador = (t: Itrabajador) => {
    let confirm = window.confirm(`Seguro que deseas eliminar al trbajador ${t.datosGenerales.nombre}?`);
    if (confirm) {
      this.trabajadorService.deleTrabajador(t.idTrabajador).subscribe(resp => {
          this.getTrabajador();
        })
    }
  }

  getNombresDatosGenerales() {
    this.datosGeneralesService.getDatosGenerales().subscribe((resp: any) => {
      this.nombresDatosGenerales = resp.map((dato: any) => dato.nombre);
    });
  }

  getTipoCargo(){
    this.cargoService.getCargo().subscribe((resp: any) => {
      this.tipoCargo = resp.map((cargo: any) => cargo.tipo_Cargo);
    });
  }
}

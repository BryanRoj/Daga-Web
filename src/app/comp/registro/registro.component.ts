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
  Elegir: string = 'modCargo';
  tipoModificacion: string = 'Registrar';
  parametros: any;

  ngOnInit():void  {
    //this.appComponent.mostrarMenuAdministrador = false; // Mostrar el menú de contacto
    this.route.queryParamMap.subscribe(
      (params) => { this.parametros = { ...params.keys, ...params } }
    );
    this.getCargo();
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
      this.formCargo.controls['id_Cargo'].setValue(this.cargo.length + 1);
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

}

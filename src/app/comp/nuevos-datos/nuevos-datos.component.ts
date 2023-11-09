import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IdatosGenerales } from 'src/app/modelo/DatosGenerales/IdatosGenerales';
import { datosGenerales } from 'src/app/modelo/DatosGenerales/datosGenerales';
import { DatosGeneralesService } from 'src/app/servicios/datosGenerales.Service';
import { DistritoService } from 'src/app/servicios/distrito.Service';

@Component({
  selector: 'app-nuevos-datos',
  templateUrl: './nuevos-datos.component.html',
  styleUrls: ['./nuevos-datos.component.css']
})
export class NuevosDatosComponent {
  parametros: any;
  tipoModificacion: string = 'Registrar';
  
  datosGenerales: any[] = [];
  objDatosGenerales: any = {};
  insUpdDatos: boolean = true;
  textoFormDatos: string = "Insertar Nuevos Datos";

  distrito: any[] = [];
  objDistrito: any = {};
  nombresDistrito: string[] = [];
  
  ngOnInit():void  {
    //this.appComponent.mostrarMenuAdministrador = false; // Mostrar el menú de contacto
    this.route.queryParamMap.subscribe(
      (params) => { this.parametros = { ...params.keys, ...params } }
    );
    this.getDatosGenerales();
    this.getDistrito();
    this.getNombresDistritos();
  }

  
  constructor(private route: ActivatedRoute, private datosGeneralesService: DatosGeneralesService, private distritoService: DistritoService) { }

  /*************************************************************************************/
  
  formDatosGenerales = new FormGroup({
    id_Datos: new FormControl(this.datosGenerales.length),
    nombre: new FormControl(),
    apellidos: new FormControl(),
    dni: new FormControl(),
    edad: new FormControl(),
    nomdistrito: new FormControl(),
    telefono: new FormControl(),
    email	: new FormControl()
  });

  getDatosGenerales = () => {
    this.datosGeneralesService.getDatosGenerales().subscribe((resp: any) => {
      this.datosGenerales = resp;
      this.formDatosGenerales.controls['id_Datos'].setValue(this.datosGenerales.length + 1);
    });
  }

  getDistrito = () => {
    this.distritoService.getDistrito().subscribe((resp: any) => {
      this.distrito = resp;
    })
  }

  registrarDatos = () => {
    this.objDatosGenerales.idDatos = this.formDatosGenerales.value.id_Datos;
    this.objDatosGenerales.nombre = this.formDatosGenerales.value.nombre;
    this.objDatosGenerales.apellidos = this.formDatosGenerales.value.apellidos;
    this.objDatosGenerales.dni = this.formDatosGenerales.value.dni;
    this.objDatosGenerales.edad = this.formDatosGenerales.value.edad;
    this.objDatosGenerales.distrito = this.formDatosGenerales.value.nomdistrito;
    this.objDatosGenerales.telefono = this.formDatosGenerales.value.telefono;
    this.objDatosGenerales.email = this.formDatosGenerales.value.email;
    
    // INSERTAR
    if (this.insUpdDatos) {
      this.datosGeneralesService.postDatosGenerales(this.objDatosGenerales).subscribe(resp => {
        this.formDatosGenerales.reset(); // Limpiar el formulario
        this.getDatosGenerales();
      });
    } else { // ACTUALIZAR
      this.datosGeneralesService.putDatosGenerales(this.objDatosGenerales).subscribe(resp => {
        this.formDatosGenerales.reset();
        this.getDatosGenerales();
        this.tipoModificacion = 'Registrar';
        this.textoFormDatos = "Insertar Datos";
        this.insUpdDatos = true;
      })
    }
  }

  editarDatos = (d: IdatosGenerales) => {
    this.objDatosGenerales.id_Datos = d.idDatos;
    this.formDatosGenerales.controls['id_Datos'].setValue(d.idDatos);
    this.formDatosGenerales.controls['nombre'].setValue(d.nombre);
    this.formDatosGenerales.controls['apellidos'].setValue(d.apellidos);
    this.formDatosGenerales.controls['nomdistrito'].setValue(d.distrito);
    this.formDatosGenerales.controls['telefono'].setValue(d.telefono);
    this.formDatosGenerales.controls['email'].setValue(d.email);
    
    // Texto
    this.tipoModificacion = 'Update';
    this.textoFormDatos = "Actualizar Datos";
    this.insUpdDatos = false;
  }
  
  eliminarDatos = (d: IdatosGenerales) => {
    let confirm = window.confirm(`¿Seguro que desea eliminar al usuario ${d.nombre}?`);
    if (confirm) {
      this.datosGeneralesService.deleDatosGenerales(d.idDatos).subscribe(resp => {
        this.getDatosGenerales();
      });
    }
  }

  getNombresDistritos() {
    this.distritoService.getDistrito().subscribe((resp: any) => {
      this.getNombresDistritos = resp.map((distrito: any) => distrito.nombreDistrito);
    });
  }
}

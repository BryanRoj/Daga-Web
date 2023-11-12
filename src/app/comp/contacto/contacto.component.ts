import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { consultas } from 'src/app/modelo/Consultas/consultas';
import { ConsultasService } from 'src/app/servicios/consultas.service';
import { Iconsultas } from 'src/app/modelo/Consultas/Iconsultas';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  aceptaTerminos: boolean = false;
  envioExitoso: boolean = false;

  enviarFormulario(): void {
    // Simulamos un tiempo de espera de 2 segundos antes de mostrar el mensaje de envío exitoso
    setTimeout(() => {
      this.envioExitoso = true;
    }, 2000);
  }

  limpiarCampos(): void {
    this.objConsultas.nombre = '';
    this.objConsultas.numero = 0;
    this.objConsultas.correo = '';
    this.objConsultas.edad = 0;
    this.objConsultas.genero = '';
    this.objConsultas.comentario = '';
    this.aceptaTerminos = false;
    this.envioExitoso = false;
  }

  /******************************************************/

  parametros: any;
  consultas: any[] = [];
  objConsultas: consultas = new consultas();
  insUpdConsultas: boolean = true;
  textoFormConsultas: string = "Enviar";
  
  constructor(
    private servicioConsultas: ConsultasService) 
    { }

  ngOnInit():void  {
    this.getConsultas();
  }
  
  formConsultas= new FormGroup({
    nombre: new FormControl(),
    numero: new FormControl(),
    correo: new FormControl(),
    edad: new FormControl(),
    genero: new FormControl(),
    comentario: new FormControl(),
  });
  
  getConsultas = () => {
    this.servicioConsultas.getConsultas().subscribe((resp: any) => {
      this.consultas = resp;
    });
  }

  registrarConsultas = () => {
    this.objConsultas.nombre = this.formConsultas.value.nombre;
    this.objConsultas.numero = this.formConsultas.value.numero;
    this.objConsultas.correo = this.formConsultas.value.correo;
    this.objConsultas.edad = this.formConsultas.value.edad;
    this.objConsultas.genero = this.formConsultas.value.genero;
    this.objConsultas.comentario = this.formConsultas.value.comentario;
    this.aceptaTerminos = true;
    this.envioExitoso = true;
  
    // INSERTAR
    if (this.insUpdConsultas) {
      this.servicioConsultas.postConsultas(this.objConsultas).subscribe(resp => {
        this.formConsultas.reset(); // Limpiar el formulario
        this.getConsultas();
      });
    } 
  }
}
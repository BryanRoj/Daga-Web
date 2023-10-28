import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { consultas } from 'src/app/modelo/consultas';
import { ConsultasService } from 'src/app/servicios/consultas.service';
import { Iconsultas } from 'src/app/modelo/Iconsultas';

@Component({
  selector: 'app-perfil',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent{
  parametros: any;
  colores: string = "bg-success";
  consultas: Iconsultas[] = [];
  objConsultas: consultas = new consultas();
  insUpdConsultas: boolean = true;
  textoFormConsultas: string = "Insertar consulta";
  totalConsultas: number = 0;

  ngOnInit():void  {
    this.getConsultas();
    //this.verObj();
  }

  constructor(private servicioConsultas: ConsultasService) { }
  
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
      this.totalConsultas = this.consultas.length;
    });
  }

  registrarConsultas = () => {
    this.objConsultas.nombre = this.formConsultas.value.nombre;
    this.objConsultas.numero = this.formConsultas.value.numero;
    this.objConsultas.correo = this.formConsultas.value.correo;
    this.objConsultas.edad = this.formConsultas.value.edad;
    this.objConsultas.genero = this.formConsultas.value.genero;
    this.objConsultas.comentario = this.formConsultas.value.comentario;
  
    // INSERTAR
    if (this.insUpdConsultas) {
      this.servicioConsultas.postConsultas(this.objConsultas).subscribe(resp => {
        this.formConsultas.reset(); // Limpiar el formulario
        this.getConsultas();
      });
    } else { // ACTUALIZAR
      this.servicioConsultas.putConsultas(this.objConsultas).subscribe(resp => {
        this.formConsultas.reset();
        this.getConsultas();
        this.textoFormConsultas = "Insertar Usuario";
        this.insUpdConsultas = true;
      })
    }
  }

  getColorClass(): string {
    const randomIndex = Math.floor(Math.random() * this.colores.length);
    return this.colores[randomIndex];
  }
  
}

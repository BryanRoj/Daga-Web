import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  fechaActual: string = ""; // Propiedad para almacenar la fecha actual

  constructor(private router: Router) { }

  ngOnInit() {
    this.obtenerFechaActual();
  }

  obtenerFechaActual() {
    const fecha = new Date();
    this.fechaActual = fecha.toISOString().split('T')[0];
  }

  cancelarContrato() {
    // Lógica para cancelar el contrato
    console.log('Contrato cancelado');
  }

  regresar() {
    this.router.navigateByUrl('/administrador', { skipLocationChange: true });
  }
}

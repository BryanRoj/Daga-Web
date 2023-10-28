import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent {
  fechaActual: string = ""; // Propiedad para almacenar la fecha actual
  descripciones: string[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.obtenerFechaActual();
  }

  obtenerFechaActual() {
    const fecha = new Date();
    this.fechaActual = fecha.toISOString().split('T')[0];
  }

  regresar() {
    this.router.navigateByUrl('/administrador', { skipLocationChange: true });
  }

  eliminarFila(index: number) {
    this.descripciones.splice(index, 1);
  }

  agregarDescripcion() {
    this.descripciones.push('');
  }
}

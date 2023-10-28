import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent implements OnInit{
  elementos: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mostrarFechaActual();
  }

  agregarFila() {
    this.elementos.push({
      codigo: '',
      cantidad: '',
      descripcion: '',
      subtotal: '',
      descuento: '',
      valorVenta: ''
    });
  }

  formFactura = new FormGroup({
    codigo: new FormControl(),    
    cantidad: new FormControl(),
    descripcion: new FormControl(),
    subtotal: new FormControl(),
    descuento: new FormControl(),
    valorVenta: new FormControl()
  });

  eliminarFila(index: number) {
    this.elementos.splice(index, 1);
  }

  mostrarFechaActual() {
    const fechaInput = document.getElementById('fecha_emision') as HTMLInputElement;
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const day = String(fechaActual.getDate()).padStart(2, '0');
    const fechaFormateada = `${year}-${month}-${day}`;
    fechaInput.value = fechaFormateada;
  }

  regresar() {
    this.router.navigateByUrl('/administrador', { skipLocationChange: true });
  }
}

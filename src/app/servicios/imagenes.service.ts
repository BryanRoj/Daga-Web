import { Injectable } from '@angular/core';
import { Iimagenes } from 'src/app/modelo/Iimagenes'; // Importa la interfaz Iimagenes

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  // Resto del código del servicio...

  getImagenByProductoId(productoId: number): Iimagenes | undefined {
    // Aquí debes implementar la lógica para obtener la imagen por el ID del producto
    // Puedes hacer una llamada HTTP a tu backend o utilizar algún otro método para obtener los datos
    // Por simplicidad, aquí se muestra una implementación de ejemplo:

    // Supongamos que tienes un array de imágenes en el servicio
    const imagenes: Iimagenes[] = [
      { id: 1, producto_id: 1, ruta: 'assets/img/ladrillos.jpg' },
      { id: 2, producto_id: 2, ruta: 'assets/img/perlas.jpg' },
      { id: 3, producto_id: 3, ruta: 'assets/img/molduras.jpg' },
      { id: 4, producto_id: 4, ruta: 'assets/img/molduras.jpg' },
      { id: 5, producto_id: 5, ruta: 'assets/img/molduras.jpg' },
      { id: 6, producto_id: 6, ruta: 'assets/img/molduras.jpg' },
      { id: 7, producto_id: 7, ruta: 'assets/img/molduras.jpg' },
      { id: 8, producto_id: 8, ruta: 'assets/img/molduras.jpg' },
      { id: 9, producto_id: 9, ruta: 'assets/img/molduras.jpg' },
      { id: 7, producto_id: 10, ruta: 'assets/img/molduras.jpg' },
      { id: 11, producto_id: 11, ruta: 'assets/img/molduras.jpg' },
      { id: 12, producto_id: 12, ruta: 'assets/img/molduras.jpg' },
      { id: 13, producto_id: 13, ruta: 'assets/img/molduras.jpg' },
      { id: 14, producto_id: 14, ruta: 'assets/img/molduras.jpg' },
      { id: 15, producto_id: 15, ruta: 'assets/img/molduras.jpg' },
      { id: 16, producto_id: 16, ruta: 'assets/img/molduras.jpg' },
      { id: 17, producto_id: 17, ruta: 'assets/img/molduras.jpg' },
      { id: 18, producto_id: 18, ruta: 'assets/img/molduras.jpg' },
      { id: 19, producto_id: 19, ruta: 'assets/img/molduras.jpg' },
      { id: 20, producto_id: 20, ruta: 'assets/img/molduras.jpg' },
      { id: 21, producto_id: 21, ruta: 'assets/img/molduras.jpg' },
      { id: 22, producto_id: 22, ruta: 'assets/img/molduras.jpg' },
      { id: 23, producto_id: 23, ruta: 'assets/img/molduras.jpg' },
      { id: 24, producto_id: 24, ruta: 'assets/img/molduras.jpg' },
      { id: 25, producto_id: 25, ruta: 'assets/img/molduras.jpg' },
      { id: 26, producto_id: 26, ruta: 'assets/img/molduras.jpg' },

      // ...
    ];

    // Encuentra la imagen que coincida con el ID del producto
    const imagen = imagenes.find(imagen => imagen.producto_id === productoId);

    return imagen;
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaProductos'
})
export class BusquedaProductosPipe implements PipeTransform {

  transform(elementos: any[], busqueda: string, ...args: unknown[]): any {
    if (busqueda === "")
      return elementos;
    let result: any[] = [];
    busqueda = busqueda.toLowerCase();
    for (const productos of elementos) {
      if (productos.nombre.toLowerCase().indexOf(busqueda) > -1 ||
      productos.caracteristicas.toLowerCase().indexOf(busqueda) > -1)
        //curso.valor === parseInt(busqueda))
        result.push(productos);
    }
    return result;

  }
}

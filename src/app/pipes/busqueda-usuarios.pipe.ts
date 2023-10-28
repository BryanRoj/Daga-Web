import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaUsuarios'
})
export class BusquedaUsuariosPipe implements PipeTransform {

  transform(elementos: any[], busqueda: string, ...args: unknown[]): any {
    if (busqueda === "")
      return elementos;
    let result: any[] = [];
    busqueda = busqueda.toLowerCase();
    for (const usuarios of elementos) {
      if (usuarios.nombre.toLowerCase().indexOf(busqueda) > -1 ||
      usuarios.apellido.toLowerCase().indexOf(busqueda) > -1)
        //curso.valor === parseInt(busqueda))
        result.push(usuarios);
    }
    return result;
  }
}

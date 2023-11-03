import { IdatosGenerales } from "src/app/modelo/IdatosGenerales";
import { Icargo } from "src/app/modelo/Icargo";

export interface Itrabajador {
  idTrabajador: number;
  dniTrabajador: string;
  datosGenerales: IdatosGenerales;
  cargo: Icargo;
}
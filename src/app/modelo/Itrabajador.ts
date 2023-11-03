import { IdatosGenerales } from "src/app/modelo/IdatosGenerales";
import { Icargo } from "src/app/modelo/Icargo";

export interface Itrabajador {
  id_Trabajador: number;
  dni_Trabajador: string;
  datosGenerales: IdatosGenerales;
  cargo: Icargo;
}
import { IdatosGenerales } from "src/app/modelo/DatosGenerales/IdatosGenerales";
import { Icargo } from "src/app/modelo/Cargo/Icargo";

export interface Itrabajador {
  idTrabajador: number;
  datosGenerales: IdatosGenerales;
  cargo: Icargo;
}
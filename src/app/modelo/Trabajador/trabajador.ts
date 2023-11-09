import { datosGenerales } from "../DatosGenerales/datosGenerales";
import { cargo } from "src/app/modelo/Cargo/cargo";
import { IdatosGenerales } from "../DatosGenerales/IdatosGenerales";
import { Icargo } from "../Cargo/Icargo";

export class trabajador {
  idTrabajador: number = 0;
  datosGenerales: IdatosGenerales = new datosGenerales();
  cargo: Icargo = new cargo();
}
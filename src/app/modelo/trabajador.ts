import {datosGenerales } from "src/app/modelo/datosGenerales"
import { cargo } from "src/app/modelo/cargo";
import { IdatosGenerales } from "./IdatosGenerales";
import { Icargo } from "./Icargo";

export class trabajador {
  idTrabajador: number = 0;
  dniTrabajador: string = "";
  datosGenerales: IdatosGenerales = new datosGenerales();
  cargo: Icargo = new cargo();
}
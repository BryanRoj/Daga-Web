import {datosGenerales } from "src/app/modelo/datosGenerales"
import { cargo } from "src/app/modelo/cargo";
import { IdatosGenerales } from "./IdatosGenerales";
import { Icargo } from "./Icargo";

export class trabajador {
  id_Trabajador: number = 0;
  dni_Trabajador: string = "";
  datosGenerales: IdatosGenerales = new datosGenerales();
  cargo: Icargo = new cargo();
}
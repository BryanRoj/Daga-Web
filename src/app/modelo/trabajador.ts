import {datosGenerales } from "src/app/modelo/datosGenerales"
import { cargo } from "src/app/modelo/cargo";

export class trabajador {
  id_Trabajador: number = 0;
  dni_Trabajador: string = "";
  datos: datosGenerales = new datosGenerales();
  cargo: cargo = new cargo();
}
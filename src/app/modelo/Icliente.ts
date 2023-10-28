import { datosGenerales } from "./datosGenerales";

export interface Icliente {
  id_Cliente: number;
  ident_Cliente: string;
  datos: datosGenerales;
}
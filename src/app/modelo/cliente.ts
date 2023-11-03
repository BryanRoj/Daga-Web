import { datosGenerales } from "./datosGenerales";
import { tipocliente } from "./tipoCliente";

export class cliente {
  id_Cliente: number = 0;
  datos: datosGenerales = new datosGenerales();
  tipoCliente: tipocliente = new tipocliente();
}
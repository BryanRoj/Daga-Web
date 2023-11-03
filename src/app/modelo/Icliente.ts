import { datosGenerales } from "./datosGenerales";
import { tipocliente } from "./tipoCliente";

export interface Icliente {
  id_Cliente: number;
  datos: datosGenerales;
  tipoCLiente: tipocliente;
}
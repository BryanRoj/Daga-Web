import { datosGenerales } from "../DatosGenerales/datosGenerales";
import { tipocliente } from "../TipoCliente/tipoCliente";

export class cliente {
  idCliente: number = 0;
  rucCliente: string = "";
  razonCliente: string = "";
  datos: datosGenerales = new datosGenerales();
  tipoCliente: tipocliente = new tipocliente();
}
import { datosGenerales } from "../DatosGenerales/datosGenerales";
import { tipocliente } from "../TipoCliente/tipoCliente";

export interface Icliente {
  id_Cliente: number;
  rucCliente: string;
  razonCliente: string;
  datos: datosGenerales;
  tipoCLiente: tipocliente;
}
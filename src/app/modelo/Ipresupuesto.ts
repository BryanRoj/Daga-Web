import { cliente } from "./cliente";
import { trabajador } from "./trabajador";

export interface Ipresupuesto {
  id_Presupuesto: string;
  fecha_Presupuesto: Date;
  cliente: cliente;
  trabajador: trabajador;
}
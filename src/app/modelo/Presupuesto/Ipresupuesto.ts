import { cliente } from "../Cliente/cliente";
import { trabajador } from "../Trabajador/trabajador";

export interface Ipresupuesto {
  idPresupuesto: string;
  fechaPresupuesto: Date;
  cliente: cliente;
  trabajador: trabajador;
}
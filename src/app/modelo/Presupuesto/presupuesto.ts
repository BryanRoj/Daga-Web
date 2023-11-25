import { cliente } from "../Cliente/cliente";
import { trabajador } from "../Trabajador/trabajador";

export class presupuesto {
  idPresupuesto: number = 0;
  codPresupuesto: string = "";
  fechaPresupuesto: Date = new Date();
  cliente: cliente = new cliente();
  trabajador: trabajador = new trabajador();
}

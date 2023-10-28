import { cliente } from "./cliente";
import { trabajador } from "./trabajador";

export class presupuesto {
  id_Presupuesto: string = "";
  fecha_Presupuesto: Date = new Date();
  cliente: cliente = new cliente();
  trabajador: trabajador = new trabajador();
}

import { presupuesto } from "./presupuesto";

export class contrato {
  id_Contrato: string = "";
  fecha_Contrato: Date = new Date();
  presupuesto: presupuesto = new presupuesto();
}

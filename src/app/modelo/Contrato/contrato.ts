import { presupuesto } from "../Presupuesto/presupuesto";

export class contrato {
  idContrato: number = 0;
  fechaContrato: Date = new Date();
  presupuesto: presupuesto = new presupuesto();
}

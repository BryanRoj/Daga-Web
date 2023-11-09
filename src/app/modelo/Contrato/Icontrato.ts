import { presupuesto } from "../Presupuesto/presupuesto";

export interface Icontrato {
  idContrato: number;
  fechaContrato: Date;
  presupuesto: presupuesto;
}

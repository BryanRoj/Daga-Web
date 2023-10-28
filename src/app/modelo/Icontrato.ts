import { presupuesto } from "./presupuesto";

export interface Icontrato {
  id_Contrato: string;
  fecha_Contrato: Date;
  presupuesto: presupuesto;
}

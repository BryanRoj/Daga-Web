import { contrato } from "./contrato";

export interface Icomprobante {
  id_Comprobante: string;
  fecha_Comprobante: Date;
  contrato: contrato;
}

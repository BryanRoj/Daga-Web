import { contrato } from "./contrato";

export interface comprobante {
  id_Comprobante: string;
  fecha_Comprobante: Date;
  contrato: contrato;
}
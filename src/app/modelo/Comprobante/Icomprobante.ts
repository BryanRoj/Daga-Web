import { contrato } from "../Contrato/contrato";

export interface Icomprobante {
  idComprobante: string;
  fechaComprobante: Date;
  contrato: contrato;
}

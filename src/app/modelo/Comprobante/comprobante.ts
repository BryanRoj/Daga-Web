import { contrato } from "../Contrato/contrato";

export class comprobante {
  idComprobante: number = 0;
  fechaComprobante: Date = new Date();
  contrato: contrato = new contrato();
}
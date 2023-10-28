import { contrato } from "./contrato";

export class comprobante {
  id_Comprobante: string = "";
  fecha_Comprobante: Date = new Date();
  contrato: contrato = new contrato();
}
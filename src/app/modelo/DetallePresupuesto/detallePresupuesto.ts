import { presupuesto } from "../Presupuesto/presupuesto";
import { servicio } from "../Servicio/servicio";

export class detallePresupuesto {
  idDetallePresupuesto: number = 0;
  descripcionServicio: string = "";
  montoTotalPresupuesto: number | null = null;
  duracionServicio: string = "";
  cantidadServicio: number = 0;
  presupuesto: presupuesto = new presupuesto();
  servicio: servicio = new servicio();
}

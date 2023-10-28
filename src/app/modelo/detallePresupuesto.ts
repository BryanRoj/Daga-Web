import { presupuesto } from "./presupuesto";
import { servicio } from "./servicio";

export class detallePresupuesto {
  id_DetallePresupuesto: string = "";
  descripcion_Servicio: string = "";
  montoTotal_Presupuesto: number | null = null;
  duracion_Servicio: string = "";
  cantidad_Servicio: number = 0;
  presupuesto: presupuesto = new presupuesto();
  servicio: servicio = new servicio();
}

import { presupuesto } from "./presupuesto";
import { servicio } from "./servicio";

export interface IdetallePresupuesto {
  id_DetallePresupuesto: string;
  descripcion_Servicio: string;
  montoTotal_Presupuesto: number | null;
  duracion_Servicio: string;
  cantidad_Servicio: number;
  presupuesto: presupuesto;
  servicio: servicio;
}

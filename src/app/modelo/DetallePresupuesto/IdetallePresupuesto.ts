import { presupuesto } from "../Presupuesto/presupuesto";
import { servicio } from "../Servicio/servicio";

export interface IdetallePresupuesto {
  idDetallePresupuesto: number;
  descripcionServicio: string;
  montoTotalPresupuesto: number | null;
  duracionServicio: string;
  cantidadServicio: number;
  presupuesto: presupuesto;
  servicio: servicio;
}

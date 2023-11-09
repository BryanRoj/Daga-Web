import { trabajador } from "../Trabajador/trabajador";

export interface Ilogin {
  idLogin: number;
  usuario: string;
  contrasena: string;
  intentos: string;
  bloqueado: boolean;
  tiempoBloqueo: number;
  trabajador: trabajador;
}
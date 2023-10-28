import { trabajador } from "./trabajador";

export interface Ilogin {
  id_Login: number;
  usuario: string;
  contrasena: string;
  trabajador: trabajador;
}
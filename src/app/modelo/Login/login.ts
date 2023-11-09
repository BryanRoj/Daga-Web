import { trabajador } from "../Trabajador/trabajador";

export class login {
  id_Login: number = 0;
  usuario: string = "";
  contrasena: string = "";
  intentos: string = "";
  bloqueado: boolean = false;
  tiempoBloqueo: number = 0;
  trabajador: trabajador = new trabajador();
}
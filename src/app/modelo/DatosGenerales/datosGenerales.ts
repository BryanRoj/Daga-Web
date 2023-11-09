import { distrito } from "../Distrito/distrito";
import { Idistrito } from "../Distrito/Idistrito";

export class datosGenerales {
    idDatos: number = 0;
    nombre: string = "";
    apellidos: string = "";
    dni: string = "";
    edad: number = 0;
    telefono: string = "";
    email: string = "";

    distrito: Idistrito = new distrito();
  }
import { Idistrito } from "../Distrito/Idistrito";

export interface IdatosGenerales {
    idDatos: number;
    nombre: string;
    apellidos: string;
    dni: string;
    edad: number;
    telefono: string;
    email: string;

    distrito: Idistrito;
  }
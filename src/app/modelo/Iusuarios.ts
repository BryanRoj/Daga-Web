export interface Iusuarios{
    id: number,
    usuario: string,
    contrasena: string,
    nombre: string,
    apellido: string,
    dni: string,
    edad: number,
    fecha_nacimiento: string | Date,
    correo: string,
    telefono: string,
    tipo_usuario: string
}
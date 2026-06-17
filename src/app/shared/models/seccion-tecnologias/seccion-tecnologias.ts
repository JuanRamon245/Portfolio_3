import { IconoTecnologia } from "../icono-tecnologia/icono-tecnologia";

export class SeccionTecnologias {
  nombre: string;
  iconoClase: string;
  tecnologias: IconoTecnologia[];

  constructor(
    nombre: string,
    iconoClase: string,
    tecnologias: IconoTecnologia[],
  ) {
    this.nombre = nombre;
    this.iconoClase = iconoClase;
    this.tecnologias = tecnologias;
  }
}

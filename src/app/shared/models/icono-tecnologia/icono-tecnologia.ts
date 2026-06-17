export class IconoTecnologia {
  nombre: string;
  iconoClase: string;
  nivel?: string;

  constructor(
    nombre: string,
    iconoClase: string,
    nivel: string,
  ) {
    this.nombre = nombre;
    this.iconoClase = iconoClase;
    this.nivel = nivel;
  }
}

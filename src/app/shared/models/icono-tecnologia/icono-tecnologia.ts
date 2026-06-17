export class IconoTecnologia {
  nombre: string;
  iconoClase: string;
  nivel?: string;
  tamano?: number;

  constructor(
    nombre: string,
    iconoClase: string,
    nivel: string,
    tamano: number,
  ) {
    this.nombre = nombre;
    this.iconoClase = iconoClase;
    this.nivel = nivel;
    this.tamano = tamano;
  }
}

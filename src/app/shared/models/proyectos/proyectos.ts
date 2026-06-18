import { IconoTecnologia } from "../icono-tecnologia/icono-tecnologia";
import { LinkTecnologia } from "../link-tecnologia/link-tecnologia";

export class Proyectos {
  titulo: string;
  iconoPrincipal: string;
  contenido: string[];
  tecnologias: IconoTecnologia[];
  enlaces: LinkTecnologia[];

  constructor(
    titulo: string,
    iconoPrincipal: string,
    contenido: string[],
    tecnologias: IconoTecnologia[],
    enlaces: LinkTecnologia[]
  ) {
    this.titulo = titulo;
    this.iconoPrincipal = iconoPrincipal;
    this.contenido = contenido;
    this.tecnologias = tecnologias;
    this.enlaces = enlaces;
  }
}

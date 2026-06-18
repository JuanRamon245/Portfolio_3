export class HitoTimeline {
  id: string;
  titulo: string;
  fecha: string;
  descripcion: string[];

  constructor(
    id: string,
    titulo: string,
    fecha: string,
    descripcion: string[],
  ) {
    this.id = id;
    this.titulo = titulo;
    this.fecha = fecha;
    this.descripcion = descripcion;
  }
}

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, signal } from '@angular/core';
import { SeccionTecnologias } from '../../shared/models/seccion-tecnologias/seccion-tecnologias';

@Component({
  selector: 'app-tecnologies',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tecnologies.html',
  styleUrl: './tecnologies.scss',
})
export class Tecnologies {
  public isIntersecting = signal<boolean>(false);
  private observer: IntersectionObserver | null = null;

  public seccionActiva = signal<number>(0);

  public isAnimating = signal<boolean>(false);

  public secciones: SeccionTecnologias[] = [
    {
      nombre: 'Frontend Web',
      iconoClase: 'html',
      tecnologias: [
        { nombre: 'Angular', iconoClase: 'code', nivel: 'Avanzado', tamano: 30 },
        { nombre: 'TypeScript', iconoClase: 'javascript', nivel: 'Medio', tamano: 30 },
        { nombre: 'SCSS', iconoClase: 'css', nivel: 'Avanzado', tamano: 30 },
        { nombre: 'RxJS', iconoClase: 'stream', nivel: 'Medio', tamano: 30 }
      ]
    },
    {
      nombre: 'Backend Web',
      iconoClase: 'dns',
      tecnologias: [
        { nombre: 'Node.js', iconoClase: 'terminal', nivel: 'Medio', tamano: 30 },
        { nombre: 'Express', iconoClase: 'api', nivel: 'Medio', tamano: 30 },
        { nombre: 'MongoDB', iconoClase: 'database', nivel: 'Básico', tamano: 30 },
        { nombre: 'PostgreSQL', iconoClase: 'table', nivel: 'Básico', tamano: 30 }
      ]
    }
  ];

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isIntersecting.set(true);
            this.observer?.disconnect(); 
          }
        },
        {
          threshold: 0.2 
        }
      );

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  seleccionarSeccion(index: number) {
    if (this.seccionActiva() === index) return;

    this.seccionActiva.set(index);
    this.isAnimating.set(true);
  }

  finalizarAnimacion() {
    this.isAnimating.set(false);
  }

  getBarrasNivel(nivel: string): number[] {
    if (nivel === 'Avanzado') return [1, 2, 3];
    if (nivel === 'Medio') return [1, 2];
    return [1];
  }
}

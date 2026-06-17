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

  public secciones: SeccionTecnologias[] = [
    {
      nombre: 'Frontend Web',
      iconoClase: 'html',
      tecnologias: [
        { nombre: 'Angular', iconoClase: 'code', nivel: 'Avanzado' },
        { nombre: 'TypeScript', iconoClase: 'javascript', nivel: 'Medio' },
        { nombre: 'SCSS', iconoClase: 'css', nivel: 'Avanzado' },
        { nombre: 'RxJS', iconoClase: 'stream', nivel: 'Medio' }
      ]
    },
    {
      nombre: 'Backend Web',
      iconoClase: 'dns',
      tecnologias: [
        { nombre: 'Node.js', iconoClase: 'terminal', nivel: 'Medio' },
        { nombre: 'Express', iconoClase: 'api', nivel: 'Medio' },
        { nombre: 'MongoDB', iconoClase: 'database', nivel: 'Básico' },
        { nombre: 'PostgreSQL', iconoClase: 'table', nivel: 'Básico' }
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
    this.seccionActiva.set(index);
  }
}

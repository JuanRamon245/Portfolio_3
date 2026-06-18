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
        { nombre: 'Angular', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'TypeScript', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'JavaScript', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'SCSS', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'HTML', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 }
      ]
    },
    {
      nombre: 'Backend Web',
      iconoClase: 'dns',
      tecnologias: [
        { nombre: 'Jakarta', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'Spring', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Springboot', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'PHP', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: '.Net', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 }
      ]
    },
    {
      nombre: 'Desarrollo movil',
      iconoClase: 'dns',
      tecnologias: [
        { nombre: 'Android Studio', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 }
      ]
    },
    {
      nombre: 'Desarrollo de escritorio',
      iconoClase: 'dns',
      tecnologias: [
        { nombre: 'Java', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Hibernate', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'Python', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 }
      ]
    },
    {
      nombre: 'Herramientas',
      iconoClase: 'dns',
      tecnologias: [
        { nombre: 'Postman', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Docker', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'Git', iconoClase: '/logos/vscodeLogo.pngapi', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Github', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Gitlab', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Fork', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'Google Analitycs', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'Asana', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Bricks 2.0', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
      ]
    },
    {
      nombre: 'IDEs',
      iconoClase: 'dns',
      tecnologias: [
        { nombre: 'Eclipse', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Spyder', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'Visual Studio', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'Visual Studio Code', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Wordpress', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'IntelliJ', iconoClase: '/logos/vscodeLogo.png', nivel: 'Básico', tamano: 50 }
      ]
    },
    {
      nombre: 'Bases de datos',
      iconoClase: 'dns',
      tecnologias: [
        { nombre: 'MySQL', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Firebase', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'PHPMyAdmin', iconoClase: '/logos/vscodeLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'PostgreSQL', iconoClase: '/logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 }
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

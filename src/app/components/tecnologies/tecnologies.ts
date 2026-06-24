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
        { nombre: 'Angular', iconoClase: 'logos/angularLogo.png', nivel: 'Avanzado', tamano: 80 },
        { nombre: 'TypeScript', iconoClase: 'logos/typescritptLogo.png', nivel: 'Avanzado', tamano: 120 },
        { nombre: 'JavaScript', iconoClase: 'logos/javascriptLogo.png', nivel: 'Avanzado', tamano: 70 },
        { nombre: 'SCSS', iconoClase: 'logos/cssLogo.png', nivel: 'Avanzado', tamano: 70 },
        { nombre: 'HTML', iconoClase: 'logos/htmlLogo.png', nivel: 'Avanzado', tamano: 70 }
      ]
    },
    {
      nombre: 'Backend Web',
      iconoClase: 'terminal',
      tecnologias: [
        { nombre: 'Jakarta', iconoClase: 'logos/jakartaLogo.png', nivel: 'Medio', tamano: 80 },
        { nombre: 'Spring', iconoClase: 'logos/springLogo.png', nivel: 'Avanzado', tamano: 60 },
        { nombre: 'Springboot', iconoClase: 'logos/springbootLogo.png', nivel: 'Avanzado', tamano: 80 },
        { nombre: 'PHP', iconoClase: 'logos/phpLogo.png', nivel: 'Medio', tamano: 80 },
        { nombre: '.Net', iconoClase: 'logos/netLogo.png', nivel: 'Avanzado', tamano: 45 }
      ]
    },
    {
      nombre: 'Desarrollo movil',
      iconoClase: 'developer_mode',
      tecnologias: [
        { nombre: 'Android Studio', iconoClase: 'logos/androidLogo.png', nivel: 'Medio', tamano: 60 }
      ]
    },
    {
      nombre: 'Desarrollo de escritorio',
      iconoClase: 'desktop_windows',
      tecnologias: [
        { nombre: 'Java', iconoClase: 'logos/javaLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Hibernate', iconoClase: 'logos/hibernateLogo.svg', nivel: 'Medio', tamano: 50 },
        { nombre: 'Python', iconoClase: 'logos/pythonLogo.png', nivel: 'Medio', tamano: 70 }
      ]
    },
    {
      nombre: 'Herramientas',
      iconoClase: 'construction',
      tecnologias: [
        { nombre: 'Postman', iconoClase: 'logos/postmanLogo.svg', nivel: 'Avanzado', tamano: 70 },
        { nombre: 'Docker', iconoClase: 'logos/dockerLogo.png', nivel: 'Medio', tamano: 70 },
        { nombre: 'Git', iconoClase: 'logos/gitLogo.png', nivel: 'Avanzado', tamano: 70 },
        { nombre: 'Github', iconoClase: 'logos/githubLogo.png', nivel: 'Avanzado', tamano: 70 },
        { nombre: 'Gitlab', iconoClase: 'logos/gitlabLogo.png', nivel: 'Avanzado', tamano: 60 },
        { nombre: 'Fork', iconoClase: 'logos/forkLogo.png', nivel: 'Medio', tamano: 70 },
        { nombre: 'Google Analitycs', iconoClase: 'logos/googleAnaliticsLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'Asana', iconoClase: 'logos/asanaLogo.png', nivel: 'Avanzado', tamano: 60 },
        { nombre: 'Bricks 2.0', iconoClase: 'logos/bricksLogo.png', nivel: 'Avanzado', tamano: 100 },
      ]
    },
    {
      nombre: 'IDEs',
      iconoClase: 'code_blocks',
      tecnologias: [
        { nombre: 'Eclipse', iconoClase: 'logos/eclipseLogo.svg', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Spyder', iconoClase: 'logos/spyderLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'Visual Studio', iconoClase: 'logos/visualStudioLogo.png', nivel: 'Medio', tamano: 80 },
        { nombre: 'Visual Studio Code', iconoClase: 'logos/vscodeLogo.png', nivel: 'Avanzado', tamano: 50 },
        { nombre: 'Wordpress', iconoClase: 'logos/wordpressLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'IntelliJ', iconoClase: 'logos/intellijLogo.png', nivel: 'Básico', tamano: 50 }
      ]
    },
    {
      nombre: 'Bases de datos',
      iconoClase: 'dns',
      tecnologias: [
        { nombre: 'MySQL', iconoClase: 'logos/mySQlLogo.png', nivel: 'Avanzado', tamano: 70 },
        { nombre: 'Firebase', iconoClase: 'logos/firebaseLogo.png', nivel: 'Avanzado', tamano: 70 },
        { nombre: 'PHPMyAdmin', iconoClase: 'logos/PhpMyAdminLogo.png', nivel: 'Medio', tamano: 50 },
        { nombre: 'PostgreSQL', iconoClase: 'logos/postgresLogo.png', nivel: 'Avanzado', tamano: 50 }
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

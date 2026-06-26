import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RombButton } from '../../shared/romb-button/romb-button';
import { HitoTimeline } from '../../shared/models/hito-timeline/hito-timeline';

@Component({
  selector: 'app-history',
  imports: [CommonModule, RombButton],
  standalone: true,
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
  public hitos = signal<HitoTimeline[]>([
    {
      id: 'step1',
      titulo: 'Cartif — Desarrollador Full-Stack',
      fecha: 'Feb. 2026 – Jun. 2026',
      descripcion: [
        'Desarrollé un módulo Kanban completo integrado en el ERP corporativo de Cartif y actualmente en uso por el eequipo de desarrollo, replicando el ecosistema de gestión de GitLab para equipos internos.',
        'El proyecto abarcó todas las fases del ciclo de vida del software:',
        '- Análisis de requisitos con el equipo',
        '- Modelado de bases de datos relacionales',
        '- Lógica de negocio en el back-end con APIs .NET',
        '- Construcción de la interfaz dinámica y responsiva con Angular.',
        'Implementé pruebas funcionales con Jest, gestioné los flujos de integración y despliegue continuo con GitLab CI, y entregué en plazo trabajando bajo metodología Scrum con sprints reales. Una experiencia que consolidó mi capacidad para trabajar en entornos profesionales exigentes y entregar software de calidad dentro de plazos definidos.'
      ] 
    },
    {
      id: 'step2',
      titulo: 'Proyectos propios en producción — Desarrollador Full-Stack',
      fecha: 'May. 2025 – Actualmente',
      descripcion: [
        'Diseño, desarrollo y mantengo plataformas reales de principio a fin, asumiendo todas las responsabilidades: arquitectura, front-end, back-end, despliegue y mantenimiento continuo. Entre los proyectos activos:',
        '- Un acortador de URLs empresarial construido con Spring Boot y Angular desde cero bajo arquitectura hexagonal, que lleva más de 9 meses en producción sin interrupciones.',
        '- El liderazgo y desarrollo completo del CMS de Jhon Cuality Delivery, una plataforma de servicios logísticos en la que diseñé la interfaz, integré una calculadora dinámica de presupuestos y un sistema modular estacional, logrando un aumento del 37 % en la captación de clientes, medido y verificado con Google Analytics.',
        '- Además, mantengo un proyecto personal de catálogo de títulos indexados con Firebase y Angular, con actualizaciones continuas.',
        'Estos proyectos me han enseñado lo que ningún curso enseña: mantener código limpio y escalable, como gestionar clientes reales y tomar decisiones técnicas con consecuencias reales en base al futuro del producto.'
      ]
    },
    {
      id: 'step3',
      titulo: 'IES Galileo — Técnico Superior en DAW',
      fecha: 'Sep. 2025 – Jun. 2026',
      descripcion: [
        'Ciclo Superior en Desarrollo de Aplicaciones Web, al que accedí directamente desde DAM con buenas calificaciones, ampliando mi formación hacia el ecosistema web y consolidando conocimientos en tecnologías del lado servidor y cliente.',
        'Finalicé con una nota de 9.2. Mi TFG fue una plataforma web desarrollada en PHP, JavaScript y PostgreSQL para la visualización y búsqueda de centros de protección animal en Castilla y León, con un enfoque especial en la experiencia de usuario y la claridad de la interfaz.'
      ]
    },
    {
      id: 'step4',
      titulo: 'Formación autodidacta en desarrollo web',
      fecha: 'Ene. 2025 – Jul. 2025',
      descripcion: [
        'Tras finalizar DAM, decidí invertir ese período en cerrar el hueco entre el perfil que tenía y el perfil que quería tener. Me formé de forma intensiva en JavaScript, Spring y Spring Boot con bases de datos MySQL, construyendo mis primeros proyectos web completos del lado servidor.',
        'Después amplié al front-end con Angular, lo que me permitió desarrollar aplicaciones full-stack reales combinando Angular y Spring Boot. Esta etapa fue la que sentó las bases del stack con el que trabajo actualmente en producción.'
      ]
    },
    {
      id: 'step5',
      titulo: 'Serbatic — Desarrollador Back-end',
      fecha: 'Sep. 2024 – Dic. 2024',
      descripcion: [
        'Mi primera experiencia en un entorno profesional real. Trabajé de forma individual en el desarrollo de una aplicación web con carácter de tienda, realizando pruebas de integración globales con Postman para garantizar la calidad del sistema.',
        'Paralelamente, colaboré como desarrollador back-end en el diseño lógico y la construcción de un microservicio acortador de URLs empresarial, que consiguió reducir en un 20 % el tiempo de redirección de enlaces internos. ',
        'Fue el primer contacto real con herramientas como IntelliJ, Docker y flujos de trabajo profesionales, y marcó el punto de partida de mi especialización en back-end.'
      ]
    },
    {
      id: 'step6',
      titulo: 'Instituto San Viator — Técnico Superior en DAM',
      fecha: 'Sep. 2022 – Jun. 2024',
      descripcion: [
        'Ciclo Superior en Desarrollo de Aplicaciones Multiplataforma, donde adquirí las bases sólidas de la programación orientada a objetos y me especialicé en Java y sus principales frameworks.',
        'A lo largo del ciclo también trabajé con Python y con desarrollo móvil nativo en Android Studio. Finalicé con una nota de 7.3 y un TFG que consistió en una aplicación móvil nativa funcional para la optimización operativa de bares y restaurantes, desarrollada en Java con Firebase como back-end en la nube.'
      ]
    },
  ]);

  public hitoActivoId = signal<string>('step1');
  public hitoVisible = signal<HitoTimeline | null>(null);

  public isIntersecting = signal<boolean>(false);
  public isExiting = signal<boolean>(false);
  private lastScrollY = 0;
  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.hitoVisible.set(this.hitos()[0]);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          const currentScrollY = window.scrollY;
          const scrollingDown = currentScrollY > this.lastScrollY;
          this.lastScrollY = currentScrollY;

          if (entry.isIntersecting) {
            this.isExiting.set(false);
            this.isIntersecting.set(true);
          } else if (this.isIntersecting()) {
            this.isExiting.set(scrollingDown);
            this.isIntersecting.set(false);
          }
        },
        {
          threshold: [0.05, 0.15],
          rootMargin: '0px'
        }
      );

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  public seleccionarHito(id: string) {
    if (this.hitoActivoId() === id) return;
    
    this.hitoActivoId.set(id);
    
    this.hitoVisible.set(null);
    
    setTimeout(() => {
      const hito = this.hitos().find(h => h.id === id) ?? null;
      this.hitoVisible.set(hito);
    }, 0);
  }
}
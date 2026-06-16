import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RombButton } from '../../shared/romb-button/romb-button';

interface HitoTimeline {
  id: string;
  titulo: string;
  fecha: string;
  descripcion: string;
}

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
      titulo: 'Desarrollo Frontend Primitivo',
      fecha: '2021 - 2022',
      descripcion: 'Comienzo de mi viaje en el desarrollo de software devorando arquitecturas nativas...'
    },
    {
      id: 'step2',
      titulo: 'Especialización en Frameworks',
      fecha: '2023 - 2024',
      descripcion: 'Salto profesional hacia ecosistemas robustos y reactivos controlando estados complejos...'
    },
    {
      id: 'step3',
      titulo: 'Arquitectura Avanzada',
      fecha: '2025 - 2026',
      descripcion: 'Diseño actual de microfrontends altamente eficientes con un control absoluto de UI/UX mecánico...'
    },
    {
      id: 'step4',
      titulo: 'Arquitectura Avanzada',
      fecha: '2025 - 2026',
      descripcion: 'Diseño actual de microfrontends altamente eficientes con un control absoluto de UI/UX mecánico...'
    },
    {
      id: 'step5',
      titulo: 'Especialización en Frameworks',
      fecha: '2023 - 2024',
      descripcion: 'Salto profesional hacia ecosistemas robustos y reactivos controlando estados complejos...'
    },
  ]);

  public hitoActivoId = signal<string>('step1');
  public hitoVisible = signal<HitoTimeline | null>(null);

  public isIntersecting = signal<boolean>(false);
  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.hitoVisible.set(this.hitos()[0]);
  }

  ngAfterViewInit() {
    // Solo ejecutamos el Observer en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isIntersecting.set(true);
            // Una vez disparada la animación, podemos dejar de observar si no quieres que se repita
            this.observer?.disconnect(); 
          }
        },
        {
          // Se activa cuando el 20% de la sección es visible en pantalla
          threshold: 0.2 
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
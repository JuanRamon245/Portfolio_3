import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, signal } from '@angular/core';
import { Proyectos } from '../models/proyectos/proyectos';

@Component({
  selector: 'app-carrusel-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel-proyectos.html',
  styleUrl: './carrusel-proyectos.scss',
})
export class CarruselProyectos {
  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) proyectos: Proyectos[] = [];

  public currentIndex = signal<number>(0);
  public isIntersecting = signal<boolean>(false);
  public isExiting = signal<boolean>(false);
  private lastScrollY = 0;
  private observer: IntersectionObserver | null = null;

  public animandoIzq = signal<boolean>(false);
  public animandoDer = signal<boolean>(false);

  public efectoDireccion = signal<string>('');

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

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

  siguiente() {
    if (this.efectoDireccion()) return;

    this.currentIndex.update(i => (i === this.proyectos.length - 1 ? 0 : i + 1));
    this.dispararAnimacion('deslizar-der');

    this.animandoDer.set(true);
    setTimeout(() => this.animandoDer.set(false), 500);
  }

  anterior() {
    if (this.efectoDireccion()) return;

    this.currentIndex.update(i => (i === 0 ? this.proyectos.length - 1 : i - 1));
    this.dispararAnimacion('deslizar-izq');

    this.animandoIzq.set(true);
    setTimeout(() => this.animandoIzq.set(false), 500);
  }

  irA(index: number) {
    if (this.efectoDireccion() || this.currentIndex() === index) return;
    const direccion = index > this.currentIndex() ? 'deslizar-der' : 'deslizar-izq';
    this.dispararAnimacion(direccion);
    
    this.currentIndex.set(index);
  }

  private dispararAnimacion(direccion: string) {
    this.efectoDireccion.set(direccion);
    setTimeout(() => this.efectoDireccion.set(''), 750);
  }
}

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
  private observer: IntersectionObserver | null = null;

  public animandoIzq = signal<boolean>(false);
  public animandoDer = signal<boolean>(false);

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isIntersecting.set(true);
            this.observer?.disconnect(); 
          }
        },
        { threshold: 0.2 }
      );
      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  siguiente() {
    this.currentIndex.update(i => (i === this.proyectos.length - 1 ? 0 : i + 1));

    this.animandoDer.set(true);
    setTimeout(() => this.animandoDer.set(false), 500);
  }

  anterior() {
    this.currentIndex.update(i => (i === 0 ? this.proyectos.length - 1 : i - 1));

    this.animandoIzq.set(true);
    setTimeout(() => this.animandoIzq.set(false), 500);
  }

  irA(index: number) {
    this.currentIndex.set(index);
  }
}

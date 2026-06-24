import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Output, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  standalone: true,
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
  public isIntersecting = signal<boolean>(false);
  public isExiting = signal<boolean>(false);
  private lastScrollY = 0; 
  private observer: IntersectionObserver | null = null;

  @Output() textoCopiado = new EventEmitter<void>();

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

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

  copiarTexto(valor: string) {
    navigator.clipboard.writeText(valor).then(() => {
      this.textoCopiado.emit();
    }).catch(err => {
      console.error("Error al copiar el texto: ", err);
    });
  }

}

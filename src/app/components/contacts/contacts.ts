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

  copiarTexto(valor: string) {
    navigator.clipboard.writeText(valor).then(() => {
      this.textoCopiado.emit();
    }).catch(err => {
      console.error("Error al copiar el texto: ", err);
    });
  }

}

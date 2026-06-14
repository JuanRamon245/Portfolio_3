import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar implements OnInit {
  activeSection: string = 'inicio';
  private sections = ['inicio', 'sobre-mi', 'proyectos', 'tecnologias', 'contacto'];
  private isBrowser: boolean;
  private isScrollingProgrammatically = false;
  private scrollTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateActiveSection();
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.isBrowser && !this.isScrollingProgrammatically) {
      this.updateActiveSection();
    }
  }

  private updateActiveSection() {
    const scrollPos = window.scrollY + window.innerHeight * 0.3;

    for (const id of [...this.sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection = id;
        return;
      }
    }
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    if (!this.isBrowser) return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    this.activeSection = sectionId;

    this.isScrollingProgrammatically = true;
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);

    const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 20;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

    this.scrollTimeout = setTimeout(() => {
      this.isScrollingProgrammatically = false;
    }, 800);
  }
}
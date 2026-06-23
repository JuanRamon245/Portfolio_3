import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar implements OnInit {
  activeSection: string = 'inicio';
  menuOpen: boolean = false;
  private sections = ['inicio', 'sobre-mi', 'proyectos', 'tecnologias', 'contacto'];
  private isBrowser: boolean;
  private isScrollingProgrammatically = false;
  private scrollTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.isBrowser) {
      document.body.style.overflow = this.menuOpen ? 'hidden' : '';
    }
  }
  
  closeMenu() {
    this.menuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
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
    const scrollPos = window.scrollY + window.innerHeight * 0.4;

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
    if (!this.isBrowser) return;

    this.activeSection = sectionId;
    this.isScrollingProgrammatically = true;

    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);

    this.scrollTimeout = setTimeout(() => {
      this.isScrollingProgrammatically = false;
    }, 1500);
  }
}
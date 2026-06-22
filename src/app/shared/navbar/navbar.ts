import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  activeSection: string = 'inicio';
  isMenuOpen: boolean = false;
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
    const scrollPos = window.scrollY + window.innerHeight * 0.35;

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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    if (!this.isBrowser) return;

    this.activeSection = sectionId;
    this.isScrollingProgrammatically = true;
    this.isMenuOpen = false;

    setTimeout(() => {
      const scrollEvent = new CustomEvent('lenis-scroll', {
        detail: { targetId: `#${sectionId}` }
      });
      window.dispatchEvent(scrollEvent);
    }, 50);

    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrollingProgrammatically = false;
    }, 1500);
  }
}
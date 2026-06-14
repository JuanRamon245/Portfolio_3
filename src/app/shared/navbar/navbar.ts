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
    if (this.isBrowser) {
      this.updateActiveSection();
    }
  }

  private updateActiveSection() {
    const scrollPos = window.scrollY + 120;

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
}
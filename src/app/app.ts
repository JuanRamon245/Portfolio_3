import { Tecnologies } from './components/tecnologies/tecnologies';
import { Proyect } from './components/proyect/proyect';
import { Landing } from './components/landing/landing';
import { History } from './components/history/history';
import { Contacts } from './components/contacts/contacts';
import { Navbar } from './shared/navbar/navbar';
import { afterNextRender, Component, signal } from '@angular/core';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [Tecnologies, Proyect, Landing, History, Contacts, Navbar],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('Portfolio_3');

  constructor() {
    afterNextRender(() => {
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }

      const lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      const links = document.querySelectorAll('.nav-link');
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('href');
          if (targetId) {
            const targetElement = document.querySelector(targetId) as HTMLElement;
            
            if (targetElement) {
              lenis.scrollTo(targetElement, {
                immediate: false,
                duration: 1.4
              });
            }
          }
        });
      });
    });
  }
}

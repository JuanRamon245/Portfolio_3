import { Tecnologies } from './components/tecnologies/tecnologies';
import { Proyect } from './components/proyect/proyect';
import { Landing } from './components/landing/landing';
import { History } from './components/history/history';
import { Contacts } from './components/contacts/contacts';
import { Navbar } from './shared/navbar/navbar';
import { afterNextRender, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tecnologies, Proyect, Landing, History, Contacts, Navbar],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio_3');

  constructor() {
    afterNextRender(() => {
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
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();

          const targetId = link.getAttribute('href');
          if (targetId) {
            const targetElement = document.querySelector(targetId) as HTMLElement;
            
            if (targetElement) {
              lenis.scrollTo(targetElement, {
                offset: 0,
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

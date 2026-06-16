import { Component, signal } from '@angular/core';
import { Proyectos } from '../../shared/models/proyectos/proyectos';
import { CarruselProyectos } from "../../shared/carrusel-proyectos/carrusel-proyectos";

@Component({
  selector: 'app-proyect',
  imports: [CarruselProyectos],
  standalone: true,
  templateUrl: './proyect.html',
  styleUrl: './proyect.scss',
})
export class Proyect {
  public proyectosPrincipales = signal<Proyectos[]>([
    {
      titulo: 'E-Commerce Microservicios',
      iconoPrincipal: 'cloud',
      contenido: 'Plataforma de ventas online distribuida desarrollada con arquitectura de microservicios, asegurando alta disponibilidad...',
      tecnologias: [
        { nombre: 'Java', iconoClase: 'coffee' }, 
        { nombre: 'Docker', iconoClase: 'view_in_ar' }
      ],
      enlaces: [
        { url: 'https://github.com/...', iconoClase: 'code' },
        { url: 'https://miweb.com', iconoClase: 'language' }
      ]
    },
    {
      titulo: 'E-Commerce Microservicios',
      iconoPrincipal: 'cloud',
      contenido: 'Plataforma de ventas online distribuida desarrollada con arquitectura de microservicios, asegurando alta disponibilidad...',
      tecnologias: [
        { nombre: 'Java', iconoClase: 'coffee' }, 
        { nombre: 'Docker', iconoClase: 'view_in_ar' }
      ],
      enlaces: [
        { url: 'https://github.com/...', iconoClase: 'code' },
        { url: 'https://miweb.com', iconoClase: 'language' }
      ]
    },
    {
      titulo: 'E-Commerce Microservicios',
      iconoPrincipal: 'cloud',
      contenido: 'Plataforma de ventas online distribuida desarrollada con arquitectura de microservicios, asegurando alta disponibilidad...',
      tecnologias: [
        { nombre: 'Java', iconoClase: 'coffee' }, 
        { nombre: 'Docker', iconoClase: 'view_in_ar' }
      ],
      enlaces: [
        { url: 'https://github.com/...', iconoClase: 'code' },
        { url: 'https://miweb.com', iconoClase: 'language' }
      ]
    },
  ]);

  public proyectosSecundarios = signal<Proyectos[]>([
    {
      titulo: 'E-Commerce Microservicios',
      iconoPrincipal: 'cloud',
      contenido: 'Plataforma de ventas online distribuida desarrollada con arquitectura de microservicios, asegurando alta disponibilidad...',
      tecnologias: [
        { nombre: 'Java', iconoClase: 'coffee' }, 
        { nombre: 'Docker', iconoClase: 'view_in_ar' }
      ],
      enlaces: [
        { url: 'https://github.com/...', iconoClase: 'code' },
        { url: 'https://miweb.com', iconoClase: 'language' }
      ]
    },
    {
      titulo: 'E-Commerce Microservicios',
      iconoPrincipal: 'cloud',
      contenido: 'Plataforma de ventas online distribuida desarrollada con arquitectura de microservicios, asegurando alta disponibilidad...',
      tecnologias: [
        { nombre: 'Java', iconoClase: 'coffee' }, 
        { nombre: 'Docker', iconoClase: 'view_in_ar' }
      ],
      enlaces: [
        { url: 'https://github.com/...', iconoClase: 'code' },
        { url: 'https://miweb.com', iconoClase: 'language' }
      ]
    },
    {
      titulo: 'E-Commerce Microservicios',
      iconoPrincipal: 'cloud',
      contenido: 'Plataforma de ventas online distribuida desarrollada con arquitectura de microservicios, asegurando alta disponibilidad...',
      tecnologias: [
        { nombre: 'Java', iconoClase: 'coffee' }, 
        { nombre: 'Docker', iconoClase: 'view_in_ar' }
      ],
      enlaces: [
        { url: 'https://github.com/...', iconoClase: 'code' },
        { url: 'https://miweb.com', iconoClase: 'language' }
      ]
    },
    {
      titulo: 'E-Commerce Microservicios',
      iconoPrincipal: 'cloud',
      contenido: 'Plataforma de ventas online distribuida desarrollada con arquitectura de microservicios, asegurando alta disponibilidad...',
      tecnologias: [
        { nombre: 'Java', iconoClase: 'coffee' }, 
        { nombre: 'Docker', iconoClase: 'view_in_ar' }
      ],
      enlaces: [
        { url: 'https://github.com/...', iconoClase: 'code' },
        { url: 'https://miweb.com', iconoClase: 'language' }
      ]
    },
    {
      titulo: 'E-Commerce Microservicios',
      iconoPrincipal: 'cloud',
      contenido: 'Plataforma de ventas online distribuida desarrollada con arquitectura de microservicios, asegurando alta disponibilidad...',
      tecnologias: [
        { nombre: 'Java', iconoClase: 'coffee' }, 
        { nombre: 'Docker', iconoClase: 'view_in_ar' }
      ],
      enlaces: [
        { url: 'https://github.com/...', iconoClase: 'code' },
        { url: 'https://miweb.com', iconoClase: 'language' }
      ]
    },
  ]);
}

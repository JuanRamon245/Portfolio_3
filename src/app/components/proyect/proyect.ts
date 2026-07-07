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
      titulo: 'Configurador Interactivo 3D Paramétrico (JDS Puertas y Ventanas)',
      iconoPrincipal: 'view_in_ar',
      contenido: [
        'Sistema interactivo en entornos web enfocado a la digitalización de catálogos industriales y personalización de elementos de carpintería a medida en tiempo real.',
        'El proyecto se encuentra actualmente en fase de desarrollo avanzado del MVP, resolviendo la complejidad técnica de modelar restricciones físicas mediante software:',
        '- Programación gráfica y paramétrica: Implementación de la lógica en Unity (C#) para permitir el escalado y modificación de perfiles, cristales y herrajes tridimensionales de forma dinámica sin deformar los componentes estructurales del modelo.',
        '- Optimización para entornos Web: Configuración y compilación del entorno para su renderizado nativo en el navegador mediante WebGL, asegurando tasas de refresco fluidas y un consumo de memoria optimizado tanto en escritorio como en dispositivos móviles.',
        '- Conexión de datos Front-to-Back: Diseño de la comunicación entre la escena 3D y los servicios API del servidor para transformar las elecciones visuales del usuario en datos estructurados listos para la tarificación de presupuestos.'
      ],
      tecnologias: [
        { nombre: 'Unity', iconoClase: 'logos/unityLogo.png', tamano: 35 },
        { nombre: 'C#', iconoClase: 'logos/csharpLogo.png', tamano: 35 },
        { nombre: 'WebGL', iconoClase: 'logos/webglLogo.png', tamano: 35 }
      ],
      enlaces: [
        { url: 'https://www.instagram.com/jds_puertas_ventanas/', iconoClase: 'link' }
      ]
    },
    {
      titulo: 'Módulo Kanban Corporativo',
      iconoPrincipal: 'view_kanban',
      contenido: [
        'Diseño y desarrollo integral de una herramienta de gestión ágil de tareas plenamente integrada en el sistema de gestión de recursos empresariales corporativo de la organización, destinada a optimizar la organización interna de los equipos de desarrollo.',
        'El proyecto se concibió bajo una arquitectura cliente-servidor, donde asumí responsabilidades en todas las fases del ciclo de vida de la aplicación:',
        '- Análisis pormenorizado de requisitos funcionales junto al equipo técnico y modelado completo de la estructura de bases de datos relacionales.',
        '- Construcción de una interfaz de usuario dinámica, fluida y totalmente responsiva utilizando Angular para replicar flujos avanzados basados en plataformas de control de versiones.',
        '- Programación del núcleo de la lógica de negocio en el back-end mediante el diseño e implementación de APIs robustas en .NET.',
        '- Aseguramiento de la calidad mediante la cobertura de pruebas funcionales con Jest y la automatización de procesos a través de flujos de integración y despliegue continuo en GitLab CI.',
        'Esta experiencia consolidó mi capacidad para trabajar bajo metodologías ágiles estrictas como Scrum, cumpliendo con entregas iterativas dentro de estándares de calidad profesional.'
      ],
      tecnologias: [
        { nombre: 'Angular', iconoClase: 'logos/angularLogo.png', tamano: 35 },
        { nombre: 'TypeScript', iconoClase: 'logos/typescritptLogo.png', tamano: 75 },
        { nombre: '.NET', iconoClase: 'logos/netLogo.png', tamano: 35 },
        { nombre: 'C#', iconoClase: 'logos/csharpLogo.png', tamano: 35 },
        { nombre: 'Postman', iconoClase: 'logos/postmanLogo.svg', tamano: 35 },
        { nombre: 'PostgresSQL', iconoClase: 'logos/postgresLogo.png', tamano: 35 },
        { nombre: 'Visual Studio Code', iconoClase: 'logos/vscodeLogo.png', tamano: 35 },
        { nombre: 'Visual Studio', iconoClase: 'logos/visualStudioLogo.png', tamano: 35 },
        { nombre: 'GitLab CI', iconoClase: 'logos/gitlabLogo.png', tamano: 35 }
      ],
      enlaces: []
    },
    {
      titulo: 'Acortador de URLs Empresarial',
      iconoPrincipal: 'link',
      contenido: [
        'Aplicación full-stack avanzada diseñada para la generación, control y analítica de enlaces acortados orientada al ámbito corporativo, proporcionando un entorno seguro para la gestión de activos digitales.',
        'El sistema destaca por su solidez estructural y su enfoque en las buenas prácticas de desarrollo:',
        '- Arquitectura de back-end basada en un patrón hexagonal desarrollado con Spring Boot, logrando un desacoplamiento total de la lógica de negocio respecto a las dependencias de infraestructura.',
        '- Creación de un panel de administración interactivo utilizando Angular, que permite un control exhaustivo del historial de enlaces, edición de rutas en caliente y flujos de recuperación segura de cuentas.',
        '- Implementación de módulos de autenticación y seguridad nativos para proteger la integridad del panel de usuario.',
        'La plataforma se encuentra desplegada de manera estable en un entorno de producción real, gestionando flujos de redirección continuos de forma diaria y demostrando una alta disponibilidad del servicio sin interrupciones.'
      ],
      tecnologias: [
        { nombre: 'Spring Boot', iconoClase: 'logos/springbootLogo.png', tamano: 35 },
        { nombre: 'Java', iconoClase: 'logos/javaLogo.png', tamano: 35 },
        { nombre: 'Angular', iconoClase: 'logos/angularLogo.png', tamano: 35 },
        { nombre: 'TypeScript', iconoClase: 'logos/typescritptLogo.png', tamano: 75 },
        { nombre: 'Visual Studio Code', iconoClase: 'logos/vscodeLogo.png', tamano: 35 },
        { nombre: 'Github', iconoClase: 'logos/githubLogo.png', tamano: 35 },
        { nombre: 'Firebase', iconoClase: 'logos/firebaseLogo.png', tamano: 35 }
      ],
      enlaces: [
        { url: 'https://github.com/JuanRamon245/AcortadorURLOnline', iconoClase: 'data_object' },
        { url: 'https://juanramon245.github.io/AcortadorURLOnline/#', iconoClase: 'link' }
      ]
    },
    {
      titulo: 'Jhon Cuality Delivery — Plataforma Logística',
      iconoPrincipal: 'local_shipping',
      contenido: [
        'Plataforma web modular estructurada como un sistema de gestión de contenidos y servicios de transporte, enfocada en la digitalización completa de operaciones logísticas de entrega en el ámbito insular.',
        'Mi participación se centró en liderar el diseño técnico y el desarrollo evolutivo del sistema, garantizando la escalabilidad y la adaptabilidad de la interfaz a las necesidades del negocio:',
        '- Diseño y maquetación responsiva de la arquitectura visual de la aplicación, construyendo componentes transversales y páginas específicas para la exposición clara del catálogo de servicios logísticos.',
        '- Desarrollo e integración de una calculadora inteligente de presupuestos dinámicos que evalúa las necesidades del cliente en tiempo real antes de la contratación del servicio.',
        '- Implementación de un sistema modular estacional que permite adaptar las capacidades de la plataforma según los picos de demanda del sector transporte.',
        '- Responsable del mantenimiento continuo y la implementación de actualizaciones iterativas en el entorno de producción, incluyendo la reciente tematización visual festiva para la campaña navideña y la planificación técnica de la próxima actualización mayor orientada a la temporada estival.',
        'El diseño centrado en la usabilidad e interfaz dinámica ha permitido, según herramientas de analítica digital, un incremento significativo y sostenido en la conversión e interés de nuevos clientes potenciales.'
      ],
      tecnologias: [
        { nombre: 'WordPress', iconoClase: 'logos/wordpressLogo.png', tamano: 35 },
        { nombre: 'Bricks 2.0', iconoClase: 'logos/bricksLogo.png', tamano: 60 },
        { nombre: 'Google Analytics', iconoClase: 'logos/googleAnaliticsLogo.png', tamano: 35 },
        { nombre: 'Asana', iconoClase: 'logos/asanaLogo.png', tamano: 45 }
      ],
      enlaces: [
        { url: 'https://transportesdelivery.com', iconoClase: 'link' }
      ]
    },
  ]);

  public proyectosSecundarios = signal<Proyectos[]>([
    {
      titulo: 'Sistema de Gestión de Comandas para Hostelería',
      iconoPrincipal: 'restaurant',
      contenido: [
        'Aplicación móvil nativa diseñada específicamente para la optimización operativa de flujos de trabajo internos y la gestión de pedidos en establecimientos del sector de la restauración.',
        'El núcleo del proyecto se desarrolló buscando la máxima fluidez de comunicación entre el personal de sala y cocina:',
        '- Construcción del software para dispositivos móviles en un entorno de desarrollo nativo utilizando principios avanzados de programación orientada a objetos con Java.',
        '- Integración de un back-end basado en servicios en la nube con Firebase para la sincronización y persistencia de la información en tiempo real.',
        '- Modelado de una interfaz reactiva que permite organizar, enviar y visualizar las comandas al instante, actualizando los estados del pedido para todos los trabajadores conectados.',
        'La solución elimina la dependencia de procesos en papel y mitiga drásticamente los errores manuales de coordinación en cocina, agilizando el ritmo de servicio del local.'
      ],
     tecnologias: [
        { nombre: 'Android Studio', iconoClase: 'logos/androidLogo.png', tamano: 35 },
        { nombre: 'Java', iconoClase: 'logos/javaLogo.png', tamano: 35 },
        { nombre: 'Github', iconoClase: 'logos/githubLogo.png', tamano: 35 },
        { nombre: 'Firebase', iconoClase: 'logos/firebaseLogo.png', tamano: 35 }
      ],
      enlaces: [
        { url: 'https://github.com/JuanRamon245/Cocinegocios', iconoClase: 'data_object' }
      ]
    },
    {
      titulo: 'Microservicio Acortador de Enlaces Corporativos',
      iconoPrincipal: 'api',
      contenido: [
        'Colaboración técnica enfocada en el diseño lógico y la construcción de un componente modular para el ecosistema tecnológico interno de una gran infraestructura empresarial.',
        'El desarrollo se enfocó en proveer un servicio de alto rendimiento y consumo ligero:',
        '- Diseño e implementación de la arquitectura del microservicio especializado en la gestión y redirección inmediata de enlaces corporativos.',
        '- Modelado de estructuras de datos optimizadas para reducir de forma notable el tiempo de latencia en las consultas de rutas internas.',
        'Este proyecto supuso un contacto directo con entornos de desarrollo profesionales complejos, el uso de herramientas de contenedorización de servicios y flujos de trabajo distribuidos.'
      ],
      tecnologias: [
        { nombre: 'Java', iconoClase: 'logos/javaLogo.png', tamano: 35 },
        { nombre: 'Jakarta', iconoClase: 'logos/jakartaLogo.png', tamano: 35 },
        { nombre: 'Docker', iconoClase: 'logos/dockerLogo.png', tamano: 35 },
        { nombre: 'PhpMyAdmin', iconoClase: 'logos/PhpMyAdminLogo.png', tamano: 35 },
        { nombre: 'Fork', iconoClase: 'logos/forkLogo.png', tamano: 35 },
        { nombre: 'Github', iconoClase: 'logos/githubLogo.png', tamano: 35 },
        { nombre: 'IntelliJ', iconoClase: 'logos/intellijLogo.png', tamano: 35 },
        { nombre: 'Postman', iconoClase: 'logos/postmanLogo.svg', tamano: 35 }
      ],
      enlaces: []
    },
    {
      titulo: 'Plataforma de Comercio Electrónico',
      iconoPrincipal: 'shopping_cart',
      contenido: [
        'Desarrollo individual de una aplicación web de tienda online que abarca desde la construcción estructural en el servidor hasta la maquetación de la experiencia del cliente.',
        'El sistema resuelve el ciclo completo de una transacción comercial digital:',
        '- Implementación de lógica back-end para soportar funciones dinámicas de catálogo de productos, persistencia de elementos en el carrito de compras y gestión del ciclo de vida de los pedidos.',
        '- Integración de flujos de procesamiento básico para la simulación de pasarelas de pago y validación de transacciones.',
        '- Creación y ejecución de un plan exhaustivo de pruebas de integración global mediante herramientas de testeo de APIs como Postman, garantizando la consistencia de los datos en cada etapa del proceso.',
        'El resultado final unifica una interfaz limpia con una arquitectura interna estable y preparada para manejar operaciones comerciales concurrentes.'
      ],
      tecnologias: [
        { nombre: 'Java', iconoClase: 'logos/javaLogo.png', tamano: 35 },
        { nombre: 'Jakarta', iconoClase: 'logos/jakartaLogo.png', tamano: 35 },
        { nombre: 'Docker', iconoClase: 'logos/dockerLogo.png', tamano: 35 },
        { nombre: 'PhpMyAdmin', iconoClase: 'logos/PhpMyAdminLogo.png', tamano: 35 },
        { nombre: 'Fork', iconoClase: 'logos/forkLogo.png', tamano: 35 },
        { nombre: 'Github', iconoClase: 'logos/githubLogo.png', tamano: 35 },
        { nombre: 'IntelliJ', iconoClase: 'logos/intellijLogo.png', tamano: 35 },
        { nombre: 'Postman', iconoClase: 'logos/postmanLogo.svg', tamano: 35 }
      ],
      enlaces: []
    },
    {
      titulo: 'Biblioteca de Gestión de Contenidos Multimedia',
      iconoPrincipal: 'movie',
      contenido: [
        'Aplicación web concebida como un catálogo personalizado y biblioteca privada en la nube para el seguimiento, organización y clasificación de colecciones de series y películas.',
        'La arquitectura actual se encuentra en un proceso de evolución técnica enfocado en la escalabilidad y la interacción social:',
        '- Desarrollo inicial combinando el framework Angular para una experiencia de usuario interactiva junto con almacenamiento y bases de datos en tiempo real mediante Firebase.',
        '- Refactorización modular en desarrollo para transformar la plataforma en un ecosistema multiusuario abierto.',
        '- Implementación de un sistema de autenticación extendido y gestión de roles que permitirá a los nuevos usuarios iniciar sesión de forma independiente, crear comunidades privadas, gestionar grupos y estructurar sus propias listas compartidas de contenido.',
        'Este proyecto actúa como mi laboratorio personal para la experimentación con nuevas características de diseño de interfaces y patrones de sincronización reactiva de datos.'
      ],
      tecnologias: [
        { nombre: 'Angular', iconoClase: 'logos/angularLogo.png', tamano: 35 },
        { nombre: 'TypeScript', iconoClase: 'logos/typescritptLogo.png', tamano: 75 },
        { nombre: 'Visual Studio Code', iconoClase: 'logos/vscodeLogo.png', tamano: 35 },
        { nombre: 'Github', iconoClase: 'logos/githubLogo.png', tamano: 35 },
        { nombre: 'Firebase', iconoClase: 'logos/firebaseLogo.png', tamano: 35 },

      ],
      enlaces: [
        { url: 'https://github.com/JuanRamon245/PeliculasYSeries', iconoClase: 'data_object' },
        { url: 'https://juanramon245.github.io/PeliculasYSeries/', iconoClase: 'link' }
      ]
    },
    {
      titulo: 'Plataforma de Búsqueda de Centros de Protección Animal',
      iconoPrincipal: 'pets',
      contenido: [
        'Plataforma web con un fuerte enfoque social desarrollada con el propósito de centralizar la visualización, localización y búsqueda de refugios de fauna y centros de protección animal dentro del ámbito autonómico.',
        'Durante la ejecución del proyecto me encargué de vertebrar toda la solución tecnológica:',
        '- Estructuración del back-end y desarrollo de la lógica del servidor utilizando lenguajes de programación del lado del servidor acoplados a una base de datos relacional PostgreSQL.',
        '- Diseño riguroso de la interfaz enfocado en los estándares de accesibilidad y diseño de experiencia de usuario, asegurando que la navegación fuera intuitiva para cualquier tipo de ciudadano.',
        '- Creación de sistemas de filtrado avanzados para optimizar la localización geográfica de los centros de acogida.',
        'El proyecto culminó con una calificación sobresaliente, destacando especialmente por la claridad de su arquitectura visual y su facilidad de uso para fomentar los procesos de adopción responsable.'
      ],
      tecnologias: [
        { nombre: 'PHP', iconoClase: 'logos/phpLogo.png', tamano: 35 },
        { nombre: 'HTML', iconoClase: 'logos/htmlLogo.png', tamano: 35 },
        { nombre: 'CSS', iconoClase: 'logos/cssLogo.png', tamano: 35 },
        { nombre: 'JavaScript', iconoClase: 'logos/javascriptLogo.png', tamano: 35 },
        { nombre: 'PostgreSQL', iconoClase: 'logos/postgresLogo.png', tamano: 35 },
        { nombre: 'Github', iconoClase: 'logos/githubLogo.png', tamano: 35 },
        { nombre: 'Postman', iconoClase: 'logos/postmanLogo.svg', tamano: 35 },
        { nombre: 'Visual Studio Code', iconoClase: 'logos/vscodeLogo.png', tamano: 35 },
      ],
      enlaces: [
        { url: 'https://github.com/...', iconoClase: 'data_object' }
      ]
    },
  ]);
}

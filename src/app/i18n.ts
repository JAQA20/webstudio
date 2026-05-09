export type Language = "en" | "es";

export const translations = {
  en: {
    languageToggle: { en: "EN", es: "ES" },
    hero: {
      badge: "Web Development Studio",
      titleLine1: "Building premium",
      titleHighlight: "digital experiences",
      description:
        "We craft scalable, high-performance web applications and SaaS platforms for modern businesses that demand excellence.",
      primaryButton: "Book a Call",
      secondaryButton: "View Projects",
      imageAlt: "Premium dashboard interface",
    },
    services: {
      heading: "Our Services",
      description:
        "Comprehensive software development solutions designed for modern businesses",
      items: [
        {
          title: "Fullstack Development",
          description:
            "End-to-end web applications built with modern frameworks and best practices for scalability and performance.",
        },
        {
          title: "Web Applications",
          description:
            "Custom web solutions tailored to your business needs, from MVPs to enterprise-scale platforms.",
        },
        {
          title: "SaaS Development",
          description:
            "Complete SaaS platforms with subscription management, multi-tenancy, and seamless user experiences.",
        },
        {
          title: "API & Backend Systems",
          description:
            "Robust backend architectures with RESTful and GraphQL APIs, optimized for reliability and scale.",
        },
        {
          title: "UI/UX Frontend Implementation",
          description:
            "Pixel-perfect interfaces with modern design systems, responsive layouts, and smooth interactions.",
        },
        {
          title: "Automation & Integrations",
          description:
            "Streamline workflows with custom automation tools and third-party service integrations.",
        },
      ],
    },
    featuredProjects: {
      heading: "Featured Projects",
      description: "Delivering exceptional results for leading companies",
      cta: "View Case Study",
      items: [
        {
          title: "La Comanda - Ordering Platform for Restaurants",
          description:
            "Real-time communication between kitchen and waitstaff, order management, and business intelligence dashboard",
          stats: " ",
        },
        {
          title: "Healthcare Management SaaS",
          description:
            "HIPAA-compliant platform for patient management and telehealth services",
          stats: "SOC 2 Certified",
        },
        {
          title: "Financial Trading Platform",
          description:
            "High-performance trading interface with real-time market data and advanced charting",
          stats: "Sub-100ms latency",
        },
      ],
    },
    pricing: {
      heading: "Pricing",
      description:
        "Clear starting prices for the types of websites and digital products we build. Final pricing depends on scope, integrations, content, and timelines.",
      featuredLabel: "Most Requested",
      plans: [
        {
          title: "Landing Page",
          description:
            "High-converting one-page website for showcasing your business, offer, or personal brand.",
          price: "$350",
          note: "Starting price in USD",
          featured: false,
          features: [
            "Custom responsive design",
            "Conversion-focused sections",
            "Contact form or WhatsApp CTA",
            "Basic SEO setup",
          ],
        },
        {
          title: "Business Website",
          description:
            "Professional multi-page website for companies that need a stronger online presence.",
          price: "$700",
          note: "Starting price in USD",
          featured: true,
          features: [
            "Up to 5 core pages",
            "Custom UI implementation",
            "Mobile optimization",
            "Technical SEO foundations",
          ],
        },
        {
          title: "E-commerce Website",
          description:
            "Online store with catalog, product pages, shopping flow, and essential management tools.",
          price: "$1,200",
          note: "Starting price in USD",
          featured: false,
          features: [
            "Product catalog setup",
            "Cart and checkout flow",
            "Payment gateway integration",
            "Basic admin management",
          ],
        },
        {
          title: "SaaS / Web Platform",
          description:
            "Robust product-focused platforms with authentication, dashboards, and business logic.",
          price: "$2,500",
          note: "Starting price in USD",
          featured: false,
          features: [
            "Authentication and user roles",
            "Dashboard and core modules",
            "Backend + database architecture",
            "Deployment-ready foundation",
          ],
        },
      ],
      custom: {
        heading: "Custom Web Systems",
        description:
          "Need a custom-built internal tool, operational platform, booking flow, admin panel, marketplace, or a fully tailored business system? We also develop web systems from scratch.",
        tags: [
          "Admin panels",
          "Reservations",
          "Client portals",
          "Internal tools",
          "Marketplaces",
          "Automations",
        ],
        startingAtLabel: "Starting at",
        price: "$3,500+",
        note:
          "Custom pricing based on modules, integrations, user roles, automations, and infrastructure requirements.",
        features: [
          "Architecture tailored to your operation",
          "Custom workflows and permissions",
          "Third-party integrations and APIs",
          "Scalable backend and database design",
        ],
      },
    },
    philosophy: {
      heading: "Our Philosophy",
      description:
        "We don't just write code—we craft digital products with the precision and care they deserve. Every project is an opportunity to push the boundaries of what's possible.",
      quote:
        '"Modern technologies meet timeless engineering principles. We build software that scales with your ambitions."',
      items: [
        {
          title: "Quality First",
          description:
            "Every line of code is written with precision, maintainability, and long-term scalability in mind.",
        },
        {
          title: "Clean Architecture",
          description:
            "We build systems with clear separation of concerns, modular design, and industry best practices.",
        },
        {
          title: "Performance Optimized",
          description:
            "Speed and efficiency are non-negotiable. We optimize every interaction and database query.",
        },
        {
          title: "Security & Reliability",
          description:
            "Enterprise-grade security standards and rigorous testing ensure your platform is always protected.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "Modern, battle-tested technologies that power exceptional digital products",
      footer:
        "We stay at the forefront of technology, constantly evaluating and adopting the best tools to deliver superior results. Our stack evolves with the industry.",
      categories: {
        frontend: "Frontend",
        language: "Language",
        backend: "Backend",
        database: "Database",
        styling: "Styling",
        api: "API",
        devops: "DevOps",
        cloud: "Cloud",
        cache: "Cache",
        orm: "ORM",
        deployment: "Deployment",
      },
    },
    process: {
      heading: "Our Process",
      description:
        "A proven methodology that transforms ideas into exceptional digital products",
      items: [
        {
          title: "Discovery",
          description:
            "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
        },
        {
          title: "Strategy",
          description:
            "Our team designs the architecture, defines the technology stack, and creates detailed technical specifications.",
        },
        {
          title: "Development",
          description:
            "Agile sprints deliver iterative progress with continuous feedback loops, ensuring alignment at every stage.",
        },
        {
          title: "Testing",
          description:
            "Comprehensive QA processes including unit tests, integration tests, and user acceptance testing guarantee quality.",
        },
        {
          title: "Launch",
          description:
            "Seamless deployment with zero downtime, performance monitoring, and ongoing support to ensure success.",
        },
      ],
    },
    testimonials: {
      heading: "Client Success Stories",
      description:
        "Trusted by leading companies to build their most critical digital infrastructure",
      items: [
        {
          quote:
            "They transformed our vision into a scalable platform that handles millions of requests daily. The code quality and architecture are exceptional.",
          role: "CTO, TechFlow Inc",
        },
        {
          quote:
            "Working with this team was seamless. They understood our complex requirements and delivered a solution that exceeded our expectations in every way.",
          role: "VP Engineering, DataPrime",
        },
        {
          quote:
            "The attention to detail, technical expertise, and collaborative approach made this one of the best development partnerships we've had.",
          role: "Product Lead, HealthTech Solutions",
        },
      ],
    },
    finalCta: {
      heading: "Ready to build something exceptional?",
      description:
        "Let's discuss your project and explore how we can bring your vision to life with world-class engineering and design.",
      primaryButton: "Schedule a Call",
      secondaryButton: "Start a Project",
    },
    footer: {
      brand: "Studio",
      description:
        "Premium fullstack development studio building scalable digital products for modern businesses.",
      servicesHeading: "Services",
      companyHeading: "Company",
      services: [
        "Fullstack Development",
        "Web Applications",
        "SaaS Platforms",
        "UI/UX Implementation",
      ],
      company: ["About", "Projects", "Process", "Contact"],
      copyright: "© 2026 Studio. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },

  // -----------------------------------------------------------------------------------------------------------ESPANOL---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  es: {
    languageToggle: { en: "EN", es: "ES" },
    hero: {
      badge: "Estudio de Desarrollo Web",
      titleLine1: "Construimos",
      titleHighlight: "experiencias digitales premium",
      description:
        "Creamos aplicaciones web escalables y de alto rendimiento, además de plataformas SaaS para negocios modernos que exigen excelencia.",
      primaryButton: "Agendar Llamada",
      secondaryButton: "Ver Proyectos",
      imageAlt: "Interfaz premium de dashboard",
    },
    services: {
      heading: "Nuestros Servicios",
      description:
        "Soluciones integrales de desarrollo de software diseñadas para negocios modernos",
      items: [
        {
          title: "Desarrollo Fullstack",
          description:
            "Aplicaciones web de punta a punta construidas con frameworks modernos y buenas prácticas para escalar con alto rendimiento.",
        },
        {
          title: "Aplicaciones Web",
          description:
            "Soluciones web personalizadas para tu negocio, desde MVPs hasta plataformas empresariales.",
        },
        {
          title: "Desarrollo SaaS",
          description:
            "Plataformas SaaS completas con manejo de suscripciones, multi-tenancy y experiencias fluidas para el usuario.",
        },
        {
          title: "APIs y Sistemas Backend",
          description:
            "Arquitecturas backend robustas con APIs REST y GraphQL, optimizadas para confiabilidad y escala.",
        },
        {
          title: "Implementación Frontend UI/UX",
          description:
            "Interfaces pixel-perfect con sistemas de diseño modernos, layouts responsivos e interacciones fluidas.",
        },
        {
          title: "Automatización e Integraciones",
          description:
            "Optimiza tus flujos con herramientas personalizadas de automatización e integraciones con servicios externos.",
        },
      ],
    },
    featuredProjects: {
      heading: "Proyectos Destacados",
      description: "Entregando resultados excepcionales para empresas líderes",
      cta: "Ver Caso de Estudio",
      items: [
        {
          title: "La Comanda - Plataforma de Pedidos en Restaurantes",
          description:
            "Comunicación en tiempo real entre cocina y meseros, gestión de pedidos y dashboard de inteligencia de negocios.",
          stats: " ",
        },
        {
          title: "SaaS de Gestión de Salud",
          description:
            "Plataforma compatible con HIPAA para gestión de pacientes y servicios de telemedicina",
          stats: "Certificación SOC 2",
        },
        {
          title: "Plataforma de Trading Financiero",
          description:
            "Interfaz de alto rendimiento con datos de mercado en tiempo real y gráficos avanzados",
          stats: "Latencia menor a 100 ms",
        },
      ],
    },
    pricing: {
      heading: "Precios",
      description:
        "Precios iniciales claros para los tipos de sitios web y productos digitales que desarrollamos. El costo final depende del alcance, integraciones, contenido y tiempos.",
      featuredLabel: "Más Solicitado",
      plans: [
        {
          title: "Landing Page",
          description:
            "Sitio de una sola página enfocado en conversión para presentar tu negocio, oferta o marca personal.",
          price: "$350",
          note: "Precio inicial en USD",
          featured: false,
          features: [
            "Diseño responsivo personalizado",
            "Secciones enfocadas en conversión",
            "Formulario de contacto o CTA a WhatsApp",
            "Configuración básica de SEO",
          ],
        },
        {
          title: "Sitio Web Empresarial",
          description:
            "Sitio profesional de varias páginas para empresas que necesitan una presencia digital más sólida.",
          price: "$700",
          note: "Precio inicial en USD",
          featured: true,
          features: [
            "Hasta 5 páginas principales",
            "Implementación UI personalizada",
            "Optimización móvil",
            "Base técnica de SEO",
          ],
        },
        {
          title: "Tienda en Línea",
          description:
            "E-commerce con catálogo, fichas de producto, flujo de compra y herramientas esenciales de gestión.",
          price: "$1,200",
          note: "Precio inicial en USD",
          featured: false,
          features: [
            "Configuración de catálogo de productos",
            "Carrito y flujo de checkout",
            "Integración de pasarela de pago",
            "Gestión administrativa básica",
          ],
        },
        {
          title: "SaaS / Plataforma Web",
          description:
            "Plataformas robustas orientadas a producto con autenticación, dashboards y lógica de negocio.",
          price: "$2,500",
          note: "Precio inicial en USD",
          featured: false,
          features: [
            "Autenticación y roles de usuario",
            "Dashboard y módulos principales",
            "Arquitectura backend + base de datos",
            "Base lista para despliegue",
          ],
        },
      ],
      custom: {
        heading: "Sistemas Web a Medida",
        description:
          "¿Necesitas una herramienta interna, plataforma operativa, sistema de reservas, panel administrativo, marketplace o un sistema de negocio totalmente personalizado? También desarrollamos sistemas web desde cero.",
        tags: [
          "Paneles admin",
          "Reservas",
          "Portales de clientes",
          "Herramientas internas",
          "Marketplaces",
          "Automatizaciones",
        ],
        startingAtLabel: "Desde",
        price: "$3,500+",
        note:
          "Precio personalizado según módulos, integraciones, roles de usuario, automatizaciones y requerimientos de infraestructura.",
        features: [
          "Arquitectura adaptada a tu operación",
          "Flujos y permisos personalizados",
          "Integraciones con APIs y servicios externos",
          "Backend y base de datos pensados para escalar",
        ],
      },
    },
    philosophy: {
      heading: "Nuestra Filosofía",
      description:
        "No solo escribimos código: construimos productos digitales con la precisión y el cuidado que merecen. Cada proyecto es una oportunidad para empujar los límites de lo posible.",
      quote:
        '"Las tecnologías modernas se encuentran con principios de ingeniería atemporales. Construimos software que escala con tus ambiciones."',
      items: [
        {
          title: "Calidad Primero",
          description:
            "Cada línea de código se escribe con precisión, mantenibilidad y escalabilidad a largo plazo en mente.",
        },
        {
          title: "Arquitectura Limpia",
          description:
            "Construimos sistemas con separación clara de responsabilidades, diseño modular y buenas prácticas de la industria.",
        },
        {
          title: "Rendimiento Optimizado",
          description:
            "La velocidad y la eficiencia no son negociables. Optimizamos cada interacción y cada consulta a la base de datos.",
        },
        {
          title: "Seguridad y Confiabilidad",
          description:
            "Estándares de seguridad empresariales y pruebas rigurosas para mantener tu plataforma siempre protegida.",
        },
      ],
    },
    techStack: {
      heading: "Stack Tecnológico",
      description:
        "Tecnologías modernas y probadas que impulsan productos digitales excepcionales",
      footer:
        "Nos mantenemos a la vanguardia de la tecnología, evaluando y adoptando constantemente las mejores herramientas para entregar resultados superiores. Nuestro stack evoluciona con la industria.",
      categories: {
        frontend: "Frontend",
        language: "Lenguaje",
        backend: "Backend",
        database: "Base de datos",
        styling: "Estilos",
        api: "API",
        devops: "DevOps",
        cloud: "Cloud",
        cache: "Cache",
        orm: "ORM",
        deployment: "Implementación",
      },
    },
    process: {
      heading: "Nuestro Proceso",
      description:
        "Una metodología probada que transforma ideas en productos digitales excepcionales",
      items: [
        {
          title: "Descubrimiento",
          description:
            "Profundizamos en tus objetivos de negocio, audiencia y requerimientos técnicos para crear un roadmap integral del proyecto.",
        },
        {
          title: "Estrategia",
          description:
            "Diseñamos la arquitectura, definimos el stack tecnológico y creamos especificaciones técnicas detalladas.",
        },
        {
          title: "Desarrollo",
          description:
            "Sprints ágiles entregan progreso iterativo con ciclos continuos de feedback, asegurando alineación en cada etapa.",
        },
        {
          title: "Pruebas",
          description:
            "Procesos completos de QA, incluyendo pruebas unitarias, integración y aceptación de usuario, garantizan calidad.",
        },
        {
          title: "Lanzamiento",
          description:
            "Despliegue fluido sin tiempo caído, monitoreo de rendimiento y soporte continuo para asegurar el éxito.",
        },
      ],
    },
    testimonials: {
      heading: "Historias de Éxito",
      description:
        "Empresas líderes confían en nosotros para construir su infraestructura digital más crítica",
      items: [
        {
          quote:
            "Transformaron nuestra visión en una plataforma escalable que maneja millones de solicitudes al día. La calidad del código y la arquitectura son excepcionales.",
          role: "CTO, TechFlow Inc",
        },
        {
          quote:
            "Trabajar con este equipo fue muy fluido. Entendieron nuestros requerimientos complejos y entregaron una solución que superó nuestras expectativas en todo sentido.",
          role: "VP de Ingeniería, DataPrime",
        },
        {
          quote:
            "La atención al detalle, el nivel técnico y el enfoque colaborativo hicieron de esta una de las mejores alianzas de desarrollo que hemos tenido.",
          role: "Líder de Producto, HealthTech Solutions",
        },
      ],
    },
    finalCta: {
      heading: "¿Listo para construir algo excepcional?",
      description:
        "Conversemos sobre tu proyecto y exploremos cómo podemos hacer realidad tu visión con ingeniería y diseño de nivel mundial.",
      primaryButton: "Agendar una Llamada",
      secondaryButton: "Iniciar un Proyecto",
    },
    footer: {
      brand: "Studio",
      description:
        "Estudio premium de desarrollo fullstack que construye productos digitales escalables para negocios modernos.",
      servicesHeading: "Servicios",
      companyHeading: "Empresa",
      services: [
        "Desarrollo Fullstack",
        "Aplicaciones Web",
        "Plataformas SaaS",
        "Implementación UI/UX",
      ],
      company: ["Nosotros", "Proyectos", "Proceso", "Contacto"],
      copyright: "© 2026 Studio. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos del Servicio",
    },
  },
} as const;

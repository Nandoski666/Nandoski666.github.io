/**
 * siteConfig.ts
 * Configuración central del sitio
 * Compatible 100% con Astro + Vite
 */

export const siteConfig = {
  // URL oficial (GitHub Pages)
  url: import.meta.env.SITE_URL || 'https://Nandoski666.github.io',

  // Idioma principal
  language: import.meta.env.SITE_LANGUAGE || 'es',

  // Nombre del sitio
  title: import.meta.env.SITE_TITLE || 'Nandoski666',

  // Descripción SEO
  description:
    import.meta.env.SITE_DESCRIPTION ||
    'Portafolio y proyectos de Hernando Javier Garcia Mogollon.',

  // Información del autor
  author: {
    name:
      import.meta.env.SITE_AUTHOR_NAME ||
      'Hernando Javier Garcia Mogollon',

    title:
      import.meta.env.SITE_AUTHOR_TITLE ||
      'Desarrollador Fullstack',

    bio:
      import.meta.env.SITE_AUTHOR_BIO ||
      'Desarrollador especializado en aplicaciones web, e-commerce y sistemas empresariales.',

    email: import.meta.env.SITE_AUTHOR_EMAIL || '',

    location:
      import.meta.env.SITE_AUTHOR_LOCATION || 'Colombia',
  },

  // Redes sociales
  social: {
    github:
      import.meta.env.SOCIAL_GITHUB ||
      'https://github.com/Nandoski666',

    linkedin: import.meta.env.SOCIAL_LINKEDIN || '',

    twitter: import.meta.env.SOCIAL_TWITTER || '',
  },

  // Navegación principal
  nav: [
    { label: 'Actividades', href: '/projects' },
    { label: 'Contacto', href: '/contact' },
  ],
} as const;

// Tipos exportados
export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];